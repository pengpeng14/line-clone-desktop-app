import firebase from "./../../firebase";

const firestore = firebase.firestore();

export async function openMediaDevices() {
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  const remoteStream = new MediaStream();
  return [localStream, remoteStream];
}
export async function createCall(
  peerConnection,
  localStream,
  remoteStream,
  idCall,
  onclose,
  setOtherend,
  setDataChannel
) {
  registerPeerConnectionListeners(peerConnection);
  const room = firestore.collection("calls").doc(idCall);
  const offerCandidates = room.collection("offerCandidates");
  const answerCandidates = room.collection("answerCandidates");

  localStream.getTracks().forEach(async (track) => {
    await peerConnection.addTrack(track, localStream);
  });

  peerConnection.addEventListener("icecandidate", (event) => {
    event.candidate && offerCandidates.add(event.candidate.toJSON());
  });
  const dataChannel = peerConnection.createDataChannel(idCall, {
    reliable: false,
  });
  setDataChannel(dataChannel);
  dataChannel.onopen = function (event) {
    const state = dataChannel.readyState;
    if (state === "open") {
      console.log("data channel open");
    }
  };
  peerConnection.addEventListener("datachannel", (event) => {
    const receiveChannel = event.channel;
    console.log(receiveChannel);
    receiveChannel.addEventListener("message", (event) => {
      const message = event.data;
      setOtherend(message === "false" ? false : true);
    });
  });

  peerConnection.addEventListener("track", (event) => {
    console.log("Got remote track:", event.streams[0]);
    event.streams[0].getTracks().forEach((track) => {
      console.log("Add a track to the remoteStream:", track);
      // setOtherend(isVideoEnable(remoteStream));
      remoteStream.addTrack(track, remoteStream);
    });
  });

  const offerDescription = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offerDescription);
  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };
  await room.set({ offer });

  room.onSnapshot(async (snapshot) => {
    const data = snapshot.data();
    if (peerConnection.iceConnectionState !== "closed") {
      if (!peerConnection.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        await peerConnection.setRemoteDescription(answerDescription);
      }
    }
  });

  answerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      console.log("answerCandidates snapshot", change);
      if (change.type === "added") {
        const candidate = new RTCIceCandidate(change.doc.data());
        await peerConnection.addIceCandidate(candidate);
      }
      if (change.type === "removed") {
        console.log("answerCandidates removed");
        hangup(peerConnection, localStream, remoteStream, idCall, onclose);
      }
    });
  });
}

export async function createAnswer(
  peerConnection,
  localStream,
  remoteStream,
  idCall,
  onclose,
  setOtherend,
  setDataChannel
) {
  console.log("create Answer", idCall);
  const room = firestore.collection("calls").doc(idCall);
  console.log(room);
  const callSnapshot = await room.get();
  const offerCandidates = room.collection("offerCandidates");
  const answerCandidates = room.collection("answerCandidates");

  if (callSnapshot.exists) {
    console.log("call snapshot is exists");
    registerPeerConnectionListeners(peerConnection);
    if (!localStream) {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    }
    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });
    // listen to icecandidate event and add icecandidate (port,ip) to offerCandidates
    peerConnection.addEventListener("icecandidate", (event) => {
      event.candidate && answerCandidates.add(event.candidate.toJSON());
    });
    const dataChannel = peerConnection.createDataChannel(idCall, {
      reliable: false,
    });
    setDataChannel(dataChannel);
    peerConnection.ondatachannel = function (event) {
      const receiveChannel = event.channel;
      console.log(receiveChannel);
      receiveChannel.onmessage = function (event) {
        console.log(event.data);
        setOtherend(event.data === "false" ? false : true);
      };
    };

    //listen to track event when track is added by remote user
    peerConnection.addEventListener("track", (event) => {
      console.log("Got remote track:", event.streams[0]);
      event.streams[0].getTracks().forEach((track) => {
        console.log("Add a track to the remoteStream:", track);
        remoteStream.addTrack(track);
        // setOtherend(isVideoEnable(remoteStream));
      });
    });

    // remoteVideo = remoteStream;
    // set remote with offer (establish connection ?-?)
    // and createAnswer
    const offerDescription = callSnapshot.data().offer;
    await peerConnection.setRemoteDescription(offerDescription);
    const answerDescription = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answerDescription);
    //then trigger icecandidate event (?-?)

    // and update to db
    const answer = {
      sdp: answerDescription.sdp,
      type: answerDescription.type,
    };
    await room.update({ answer });

    offerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        console.log("offerCandidate snapshot", change);
        if (change.type === "added") {
          const candidate = new RTCIceCandidate(change.doc.data());
          await peerConnection.addIceCandidate(candidate);
        }
        if (change.type === "removed") {
          console.log("offerCandidates removed");
          hangup(peerConnection, localStream, remoteStream, idCall, onclose);
        }
      });
    });
  }
}

export function switchCallType(localStream, call, setCall, dataChannel) {
  console.log(call);
  if (call.type === "video") {
    setCall({ type: "audio" });
    localStream.getVideoTracks()[0].enabled = false;
    if (dataChannel) {
      console.log("datachannel", dataChannel);
      if (dataChannel.readyState === "open") {
        console.log("open data channel");
        dataChannel.send("false");
      }
    }
  } else if (call.type === "audio") {
    setCall({ type: "video" });
    localStream.getVideoTracks()[0].enabled = true;
    if (dataChannel) {
      console.log("datachannel", dataChannel);
      if (dataChannel.readyState === "open") {
        console.log("open data channel");
        dataChannel.send("true");
      }
    }
  }
}

export function handleSetCallType(localStream, call, dataChannel) {
  if (call.type === "video") {
    localStream.getVideoTracks()[0].enabled = true;
    if (dataChannel) {
      console.log("datachannel", dataChannel);
      if (dataChannel.readyState === "open") {
        console.log("open data channel");
        dataChannel.send("true");
      }
    }
    return;
  }
  localStream.getVideoTracks()[0].enabled = false;
  if (dataChannel) {
    console.log("datachannel", dataChannel);
    if (dataChannel.readyState === "open") {
      console.log("open data channel");
      dataChannel.send("false");
    }
  }
  console.log("localstream", localStream.getVideoTracks()[0]);
}

export function isVideoEnable(remoteStream) {
  console.log(remoteStream);
  if (remoteStream) {
    if (remoteStream.getVideoTracks()[0]) {
      console.log(remoteStream.getVideoTracks()[0]);
      return remoteStream.getVideoTracks()[0].enabled;
    }
    return false;
  }
  return false;
}

export async function hangup(
  peerConnection,
  localStream,
  remoteStream,
  idCall,
  onclose
) {
  const tracks = localStream.getTracks();
  tracks.forEach((track) => track.stop());

  if (remoteStream) {
    remoteStream.getTracks().forEach((track) => track.stop());
  }

  if (peerConnection) {
    peerConnection.close();
  }

  const room = firestore.collection("calls").doc(idCall);
  const answerCandidates = await room.collection("answerCandidates").get();
  answerCandidates.forEach(async (candidate) => {
    await candidate.ref.delete();
  });
  const offerCandidates = await room.collection("offerCandidates").get();
  offerCandidates.forEach(async (candidate) => {
    await candidate.ref.delete();
  });
  await room.delete();
  onclose();
}

function registerPeerConnectionListeners(peerConnection) {
  peerConnection.addEventListener("icegatheringstatechange", () => {
    console.log(
      `ICE gathering state changed: ${peerConnection.iceGatheringState}`
    );
  });

  peerConnection.addEventListener("connectionstatechange", () => {
    console.log(`Connection state change: ${peerConnection.connectionState}`);
  });

  peerConnection.addEventListener("signalingstatechange", () => {
    console.log(`Signaling state change: ${peerConnection.signalingState}`);
  });

  peerConnection.addEventListener("iceconnectionstatechange ", () => {
    console.log(
      `ICE connection state change: ${peerConnection.iceConnectionState}`
    );
  });
}
