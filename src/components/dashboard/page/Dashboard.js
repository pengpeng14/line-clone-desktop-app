import React, { useState, useEffect, useReducer, useRef } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
  Switch,
  useLocation,
} from "react-router-dom";
import { Divider, Button } from "@material-ui/core";
import { Auth, Hub } from "aws-amplify";
import { getUserById, getMessagesByDate } from "../../../api/queries";
import { setLocalTimeZone } from "../../model/Localtime";
import { API, graphqlOperation } from "aws-amplify";
import { newOnCreateMessage } from "../../../graphql/subscriptions";
import DrawerMenu from "../components/DrawerMenu";
import ChatList from "../components/ChatList";
import Selection from "../components/Selection";
import ChatFeedRoom from "../components/chat-feed/ChatFeedRoom";
import Profile from "../components/Profile";
import { showNotification } from "../../model/Notification";
import { scrollToBottom } from "../../model/ScrollView";
import CallerDialogue from "./../../Dialogue/CallerDialogue";
import CalleeDialogue from "./../../Dialogue/CalleeDialogue";
import {
  handleCallerDialogue,
  handleCalleeDialogue,
} from "../../../utils/chat-room/utils";
import AddFriend from "../components/AddFriend";

function reducer(state, action) {
  // console.log("switch");
  switch (action.type) {
    case "set":
      console.log("set");
      return [action.payload];
    case "add":
      console.log("add");
      let notiForChatlist = 0;
      const time = setLocalTimeZone(action.payload.createdAt);
      if (action.payload.user.username !== state[0].user.username) {
        state[0].setCountNoti(state[0].countNoti + 1);
        notiForChatlist = 1;
      }

      if (action.payload.isCall) {
        console.log(action.payload);
        state[0].setCall({ isCall: true, caller: action.payload.user });
      }
      // Set for chatfeed UI
      if (state[0].chat) {
        // console.log(state[0].chat);
        // Id of new msg in And id of chat at that time Are compatible.
        if (state[0].chat.idGroup === action.payload.group.id) {
          state[0].setChat((prevState) => ({
            idGroup: prevState.idGroup,
            name: prevState.name,
            sender: action.payload.user.username,
            content: action.payload.message,
            time: time,
            ISOtime: action.payload.createdAt,
            theirUser: { ...prevState.theirUser },
            messages: [...prevState.messages, action.payload],
          }));
        }
        // clicked And ids are NOT compatible, need open chat ..cause clicked
        else if (
          action.onClick === "onClick" &&
          state[0].chat.idGroup !== action.payload.group.id
        ) {
          console.log("clicked in");
          const chat = state[0].chatList.find((obj) => {
            return obj.idGroup == action.payload.group.id;
          });
          console.log(chat);
          state[0].setChat(chat);
        }
      }

      // Set for chatlist UI
      if (action.onClick === "noClick") {
        console.log("chatlist... editing");
        state[0].setChatList(
          state[0].chatList.map((obj) =>
            obj.idGroup === action.payload.type
              ? {
                  ...obj,
                  sender: action.payload.user.username,
                  content: action.payload.message,
                  time: time,
                  ISOtime: action.payload.createdAt,
                  theirUser: { ...obj.theirUser },
                  messages: [...obj.messages, action.payload],
                  unread: obj.unread + notiForChatlist,
                }
              : obj
          )
        );
      }
  }
}

const Dashboard = ({ match }) => {
  const history = useHistory();
  const [selection, setSelection] = useState("");
  const [myUser, setMyUser] = useState();
  const [user, setUser] = useState();
  const [chatList, setChatList] = useState([]);
  const [sordteChatList, updateSordteChatList] = useState([]);
  const [chat, setChat] = useState();
  const [newMessage, setNewMessage] = useState();
  const [countNoti, setCountNoti] = useState();
  const [friendList, setFriendList] = useState([]);
  const [call, setCall] = useState({ isCall: false, caller: null });
  const [caller, setCaller] = useState({ type: "audio" });
  const [callee, setCallee] = useState({ type: "audio" });
  const dummy = useRef();
  const [state, dispatch] = useReducer(reducer, {
    chatList: [],
    chat: {},
  });

  useEffect(async () => {
    // Fetch current user
    checkUserCurrent();
    return () => {};
  }, []);

  useEffect(() => {
    // Fetch for chatList
    setChatList([]);
    fetchChatList();

    return () => {};
  }, [myUser]);

  useEffect(() => {
    chatList.sort(function sort(b, a) {
      console.log("...sorting");
      return new Date(a.ISOtime).getTime() - new Date(b.ISOtime).getTime();
    });
    // console.log(chatList, chat);

    dispatch({
      type: "set",
      payload: {
        chatList: chatList,
        chat: chat,
        countNoti: countNoti,
        setChat: setChat,
        setChatList: setChatList,
        setCountNoti: setCountNoti,
        user: myUser,
        setCall,
      },
    });

    updateSordteChatList(chatList);

    if (dummy.current) {
      scrollToBottom(dummy);
    }
    return () => {};
  }, [chatList, chat, countNoti]);

  useEffect(() => {
    // Open subscribe
    setupSubscriptions();
    return () => {
      subscriptionOnCreate.unsubscribe();
    };
  }, []);

  let subscriptionOnCreate;
  const setupSubscriptions = async () => {
    subscriptionOnCreate = API.graphql(
      graphqlOperation(newOnCreateMessage)
    ).subscribe({
      next: async (data) => {
        const newMsgObj = data.value.data.newOnCreateMessage;
        console.log(newMsgObj);
        setNewMessage(newMsgObj);

        if (Notification.permission === "granted") {
          showNotification(newMsgObj.group.id, dispatch, newMsgObj);
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((permission) => {
            if (permission == " granted")
              showNotification(newMsgObj.group.id, dispatch, newMsgObj);
          });
        }
      },
    });
  };

  const checkUserCurrent = async () => {
    // Get id by checking user current auth
    const auth = await Auth.currentAuthenticatedUser();
    console.log(auth);
    const id = auth.attributes.sub;

    // Get User by id
    try {
      const userById = await getUserById(id);
      setMyUser(userById);
      setUser(userById);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchChatList = async () => {
    console.log(myUser);
    if (myUser) {
      let noti = 0;
      const fetchFriendList = myUser.groups.items.filter((obj) => {
        return obj.group.isDirect === true;
      });
      setFriendList(fetchFriendList);
      console.log(fetchFriendList);
      await myUser.groups.items.map(async (group) => {
        if (group.group.isDirect && group.group.messages.items.length != 0) {
          const fetchAllMessage = await getMessagesByDate(group.group.id);
          const theirUser = findFriendForChatlist(
            myUser,
            group.group.users.items
          );
          const resultFilterTheirUser = countHasUnRead(fetchAllMessage);
          noti += resultFilterTheirUser.length;

          const localtime = setLocalTimeZone(
            fetchAllMessage.items[
              fetchAllMessage.items.length - 1
            ].createdAt.toString()
          );

          let newChatInfo = {
            idGroup: group.group.id,
            name: group.group.name,
            sender:
              fetchAllMessage.items[fetchAllMessage.items.length - 1].user
                .username,
            content:
              fetchAllMessage.items[fetchAllMessage.items.length - 1].message,
            time: localtime,
            ISOtime:
              fetchAllMessage.items[fetchAllMessage.items.length - 1].createdAt,
            theirUser: theirUser,
            messages: fetchAllMessage.items,
            unread: resultFilterTheirUser.length,
          };
          // console.log("fetch chatlist");
          setChat(newChatInfo);
          setChatList((previouschat) => [...previouschat, newChatInfo]);
          setCountNoti(noti);
        }
      });
    }
  };

  const countHasUnRead = (fetchAllMessage) => {
    const result = fetchAllMessage.items.filter(
      (item) => item.hasRead === false
    );
    // console.log("result count", result);
    const resultFilterTheirUser = result.filter(
      (item) => item.user.username !== myUser.username
    );
    // console.log(resultFilterTheirUser);

    return resultFilterTheirUser;
  };

  const findFriendForChatlist = (myuser, group) => {
    for (let i = 0; i < group.length; i++) {
      if (myuser.username !== group[i].user.username) {
        return group[i].user;
      }
    }
  };

  const choseMenu = () => {
    switch (selection) {
      case "chats":
        // console.log(selection);
        return (
          <ChatList
            match={match}
            chatListArr={sordteChatList}
            setChat={setChat}
            setChatList={setChatList}
            chatList={chatList}
            setCountNoti={setCountNoti}
            countNoti={countNoti}
            myUser={myUser}
          />
        );
      case "addfriends":
        return (
          <AddFriend
            user={myUser}
            match={match}
            chatRoom={sordteChatList}
            setChat={setChat}
            setFriendList={setFriendList}
          />
        );
      case "profile":
        // console.log(selection);
        return (
          <Profile
            match={match}
            user={user}
            setUser={setUser}
            friendList={friendList}
            setChat={setChat}
          />
        );
      default:
        // console.log("default profile");
        return (
          <Profile
            match={match}
            user={user}
            setUser={setUser}
            friendList={friendList}
            setChat={setChat}
            setCaller={setCaller}
          />
        );
    }
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* {console.log(match.url)} */}
        <DrawerMenu
          match={match}
          setSelection={setSelection}
          countNoti={countNoti}
        />
        <div>
          <Selection type={selection} />
          <div style={{ display: "flex" }}>
            {choseMenu()}
            <Divider orientation="vertical" flexItem />
            <Switch>
              <Route path={`${match.path}/:idGroup`}>
                <ChatFeedRoom
                  myUser={myUser}
                  chat={chat}
                  dummy={dummy}
                  selection={selection}
                  setCaller={setCaller}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      {chat ? (
        call.isCall && call.caller.id === myUser.id ? (
          <CallerDialogue
            open={call.isCall}
            onclose={() => handleCallerDialogue(setCaller, setCall)}
            id={chat.idGroup}
            callee={chat.theirUser}
            caller={caller}
            setCaller={setCaller}
          />
        ) : (
          call.caller && (
            <CalleeDialogue
              open={call.isCall}
              onclose={() => handleCalleeDialogue(setCallee, setCall)}
              id={chat.idGroup}
              caller={call.caller}
              callee={callee}
              setCallee={setCallee}
            />
          )
        )
      ) : null}
    </Router>
  );
};

export default Dashboard;
