import { Dialog, IconButton } from "@material-ui/core";
import {
  CallEndRounded,
  CallRounded,
  VideocamOffRounded,
  VideocamRounded,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import useStyles from "../../styles/calling-content";
import { servers } from "../../utils/calling/stun-servers";
import {
  createAnswer,
  handleSetCallType,
  hangup,
  openMediaDevices,
  switchCallType,
} from "../../utils/calling/utils";
import CallingContent from "./DialogueContent/CallingContent";

function CalleeDialogue(props) {
  const { open, onclose, id, caller, callee, setCallee } = props;
  const classes = useStyles();
  const [isRecieve, setIsRecieve] = useState(false);
  const [otherend, setOtherend] = useState(false);
  const peerConnection = new RTCPeerConnection(servers);
  // const dataChannel = peerConnection.createDataChannel(id);
  const [dataChannel, setDataChannel] = useState();
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  async function answerTheCall() {
    if (open) {
      setIsRecieve(true);
      const [localStream, remoteStream] = await openMediaDevices();
      localVideo.current.srcObject = localStream;
      remoteVideo.current.srcObject = remoteStream;

      handleSetCallType(localStream, callee, dataChannel);

      await createAnswer(
        peerConnection,
        localStream,
        remoteStream,
        id,
        onclose,
        setOtherend,
        setDataChannel
      );
      return;
    }
  }

  function handleSwitchCallType() {
    switchCallType(
      localVideo.current.srcObject,
      callee,
      setCallee,
      dataChannel
    );
  }

  async function hangupthecall() {
    await hangup(
      peerConnection,
      localVideo.current.srcObject,
      remoteVideo.current.srcObject,
      id,
      onclose
    );
  }
  return (
    <Dialog
      open={open}
      fullWidth={callee.type === "video"}
      maxWidth={callee.type === "video" && "md"}
    >
      {open && (
        <CallingContent
          localVideo={localVideo}
          remoteVideo={remoteVideo}
          call={callee}
          user={caller}
          otherend={otherend}
        />
      )}
      <div className={classes.details}>
        <IconButton
          onClick={() => hangupthecall()}
          className={classes.callEndIcon}
        >
          <CallEndRounded fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => answerTheCall()}
          className={classes.callIcon}
          style={{
            display: isRecieve ? "none" : "",
            marginRight: isRecieve && "0px",
          }}
        >
          <CallRounded fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => handleSwitchCallType()}
          className={classes.videocamIcon}
        >
          {callee.type === "video" ? (
            <VideocamRounded fontSize="large" />
          ) : (
            <VideocamOffRounded fontSize="large" />
          )}
        </IconButton>
      </div>
    </Dialog>
  );
}

export default CalleeDialogue;
