import React, { useEffect, useState, useRef } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
  Switch,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  InputBase,
} from "@material-ui/core";
import {
  EventNote,
  MoreVert,
  Attachment,
  CallRounded,
  VideocamRounded,
} from "@material-ui/icons";
import MyMessageBubble from "./MyMessageBubble";
import TheirMessageBubble from "./TheirMessageBubble";
import { createMessageInGroup } from "../../../../api/mutations";
import { setLocalTimeZone } from "../../../model/Localtime";
import { handleCallMenu } from "../../../../utils/chat-room/utils";
import { uploadFiles } from "../../../../utils/sending-media/utils";
import { scrollToBottom } from "../../../model/ScrollView";
import useStyles from "../../../../styles/ChatFeedRoomStyle";
import CallMenu from "../../../Menu/CallMenu";

const ChatFeedRoom = (props) => {
  const { myUser, chat, dummy, setCaller, selection } = props;
  const classes = useStyles();
  const idGroup = useParams();
  const [currentMsg, setCurrentMsg] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [imgs, setImgs] = useState([]);
  const [filesUpload, setFilesUpload] = useState([]);
  const hiddenUploadBtn = useRef(null);

  useEffect(() => {
    if (dummy.current) {
      scrollToBottom(dummy);
    }
    return () => {};
  }, []);

  const handleSendMessage = async (e) => {
    if (e.keyCode === 13) {
      let message = {
        type: idGroup.idGroup,
        message: currentMsg,
        messageUserId: myUser.id,
        messageGroupId: idGroup.idGroup,
        isBlock: false,
        hasRead: false,
        isCall: false,
      };
      if (filesUpload.length) {
        console.log(filesUpload);
        setImgs([]);
        const responses = await uploadFiles(filesUpload);
        console.log(responses);
        message = { ...message, media: responses };
      }
      console.log(message);

      const msg = await createMessageInGroup(message);
      const time = setLocalTimeZone(msg.createdAt);
      setCurrentMsg("");
      setFilesUpload([]);
    }
  };
  function handleSelectedFiles(e) {
    const files = e.target.files;
    console.log(files);
    // setFilesUpload(files);
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      setFilesUpload((prevFiles) => [...prevFiles, files[i]]);
      const _img = URL.createObjectURL(files[i]);
      setImgs((prevImgs) => [...prevImgs, _img]);
    }
  }

  function handleTriggerUploadPhoto() {
    console.log("trigger hidden btn");
    hiddenUploadBtn.current.click();
  }

  return (
    <div
      className={selection === "chats" ? classes.root : classes.rootNoAppbar}
    >
      {/* {console.log(location.pathname)} */}
      <AppBar elevation={0} position="static" className={classes.appbar}>
        <Toolbar className={classes.Toolbar}>
          <Typography
            className={classes.nameChat}
            style={{ flexGrow: 1, textAlign: "left" }}
          >
            {chat.theirUser.displayName}
          </Typography>
          <IconButton className={classes.iconButton}>
            <EventNote className={classes.iconSection} />
          </IconButton>
          <IconButton
            className={classes.iconButton}
            onClick={(e) => handleCallMenu(e, anchorEl, setAnchorEl)}
          >
            <CallRounded className={classes.iconSection} />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <MoreVert className={classes.iconSection} />
          </IconButton>
          {anchorEl && (
            <CallMenu
              setCaller={setCaller}
              idGroup={idGroup.idGroup}
              user={myUser}
              onclose={() => handleCallMenu(null, anchorEl, setAnchorEl)}
              anchorEl={anchorEl}
            />
          )}
        </Toolbar>
      </AppBar>
      <div
        className={
          selection === "chats" ? classes.chatfeed : classes.chatfeedNoAppbar
        }
      >
        {/* {console.log(chat.messages)} */}
        {chat
          ? chat.messages.map((message, index) =>
              message.user.id === myUser.id ? (
                <MyMessageBubble key={index} message={message} />
              ) : (
                <TheirMessageBubble
                  key={index}
                  message={message}
                  user={chat.theirUser}
                  setCaller={setCaller}
                  idGroup={idGroup.idGroup}
                  myUser={myUser}
                />
              )
            )
          : null}
        <div ref={dummy} />
      </div>
      <Divider />
      <form className={classes.textArea}>
        <InputBase
          placeholder={imgs.length ? "" : "Enter a message"}
          fullWidth
          multiline
          rowsMin={1}
          maxRows={5}
          style={{ height: "70px" }}
          value={currentMsg}
          onChange={(e) => setCurrentMsg(e.target.value)}
          onKeyUp={(e) => {
            handleSendMessage(e);
          }}
          startAdornment={
            imgs &&
            imgs.map((uri, index) => (
              <img
                key={index}
                src={uri}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  marginRight: "3px",
                  borderRadius: "5px",
                }}
              />
            ))
          }
        />
        <input
          ref={hiddenUploadBtn}
          style={{ display: "none" }}
          type="file"
          multiple="multiple"
          onChange={(e) => handleSelectedFiles(e)}
        />
        <div className={classes.iconButtTextArea}>
          <IconButton
            className={classes.iconButton}
            onClick={() => handleTriggerUploadPhoto()}
          >
            <Attachment />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default ChatFeedRoom;
