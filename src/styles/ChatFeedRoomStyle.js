import React from "react";
import { makeStyles } from "@material-ui/styles";

const drawerChatListWidth = 35;
const appbarStack = 278;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    // width: `100vw`,
    width: `calc(100vw - ${drawerChatListWidth}%)`,
    height: `calc(98vh - 64px)`,
  },
  rootNoAppbar: {
    backgroundColor: "#ffffff",
    // width: `100vw`,
    width: `calc(100vw - ${drawerChatListWidth}%)`,
    height: `calc(98vh)`,
  },
  appbar: {
    backgroundColor: "#ffffff",
    padding: "15px 0px 15px 0px",
  },
  nameChat: {
    fontWeight: "600",
    color: "#000000",
    fontSize: "20px",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  iconSection: {
    fontSize: "30px",
  },
  iconButton: {
    color: "#050505",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  chatArea: {
    overflowY: "auto",
    height: `calc(100vh - ${appbarStack}px)`,
    backgroundColor: "#ffffff",
    overflow: "auto",
  },
  textArea: {
    height: "120px",
    backgroundColor: "#ffffff",
    padding: "0px 0px 0px 20px",
    position: "fixed",
    width: "60vw",
    // bottom: 0,
  },
  iconButtTextArea: {
    margin: "0px 10px 0px 0px",
    height: "40px",
    display: "flex",
  },
  chatfeed: {
    overflowY: "scroll",
    overflow: "hidden",
    height: `calc(100vh - 278px)`,
  },
  chatfeedNoAppbar: {
    overflowY: "scroll",
    overflow: "hidden",
    height: `calc(100vh - 214px)`,
  },
}));

export default useStyles;
