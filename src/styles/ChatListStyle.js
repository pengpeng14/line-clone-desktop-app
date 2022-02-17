import React from "react";
import { makeStyles } from "@material-ui/styles";

const chatListWidth = "35%";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: `calc(100vw - ${80}px)`,
    width: chatListWidth,
    overflowY: "auto",
    // overflow: "hidden",
    height: `calc(98vh - 64px)`,
    marginLeft: "80px",
    minWidth: "400px",
  },
  appbar: {
    backgroundColor: "#ffffff",
    marginBottom: "10px",
  },
  searchInput: {
    padding: "15px",
    backgroundColor: "#f3f3f3",
    borderRadius: "10px",
    marginTop: "20px",
  },
  iconSearch: {
    paddingBottom: "10px",
    color: "#b7b7b7",
  },
  chatRoom: {
    width: "100%",
    height: 100,
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
    "&:focus": {
      backgroundColor: "#f3f3f3",
    },
    textTransform: "capitalize !important",
    padding: "10px 20px 10px 15px",
    justifyContent: "flex-start",
  },
  chatDesc: {
    textAlign: "left",
    padding: "10px",
    width: "70%",
  },
  nameChat: {
    fontWeight: "600",
  },
  timeChat: {
    color: "#b7b7b7",
    // alignSelf: "stretch",
    padding: "5px 0px 5px 0px",
    position: "absolute",
    top: "2px",
  },
  multiLineEllipsis: {
    color: "#777777",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  notiBox: {
    width: "25px",
    height: "25px",
    backgroundColor: "#5ac463",
    borderRadius: "50%",
    justifyContent: "center",
    display: "flex",
    margin: "auto",
    position: "absolute",
    right: "35px",
  },
  noti: {
    // width: "25px",
    // height: "25px",
    // backgroundColor: "#5ac463",
    // borderRadius: "50%",
    // justifyContent: "center",
    // display: "flex",
    // margin: "auto",
    // position: "absolute",
    // right: "35px",
    color: "#ffffff",
    margin: "auto",
    fontWeight: "bold",
    fontSize: "14px",
  },
}));

export default useStyles;
