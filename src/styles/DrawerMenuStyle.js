import React from "react";
import { makeStyles } from "@material-ui/styles";

const drawerWidth = "80px";
const appbarHeight = 64;

const useStyles = makeStyles((theme) => ({
  drawer: {},
  drawerPaper: {
    width: drawerWidth,
    background: "#1f2b45",
  },
  iconMtDrawer: {
    color: "#4e5870",
    fontSize: "140%",
    "&:focus": {
      color: "#ffffff",
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  iconAweDrawer: {
    color: "#4e5870",
    fontSize: "120%",
    "&:focus": {
      color: "#ffffff",
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIconBottom: {
    marginTop: "auto",
    marginLeft: "10px",
  },
  iconButton: {
    "&:hover": {
      color: "transparent",
      backgroundColor: "transparent",
    },
    marginBottom: "5px",
  },
  notiBox: {
    width: "20px",
    height: "20px",
    backgroundColor: "#ea4851",
    borderRadius: "50%",
    justifyContent: "center",
    display: "flex",
    margin: "auto",
    position: "absolute",
    left: "50px",
    top: "10px",
  },
  noti: {
    color: "#ffffff",
    margin: "auto",
    fontWeight: "bold",
    fontSize: "12px",
  },
}));

export default useStyles;
