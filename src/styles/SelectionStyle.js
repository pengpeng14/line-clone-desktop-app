import React from "react";
import { makeStyles } from "@material-ui/styles";

const drawerWidth = 80;
const appbarHeight = 64;

const useStyles = makeStyles((theme) => ({
  appbar: {
    width: `calc(100vw - ${drawerWidth}px)`,
    backgroundColor: "#ffffff",
    marginLeft: drawerWidth,
    height: appbarHeight,
  },
  appbarNoMargin: {
    width: `calc(100vw - ${drawerWidth}px)`,
    backgroundColor: "#ffffff",
    marginLeft: drawerWidth,
    height: 0,
  },
  chatSection: {
    margin: "0px 10px 0px 0px",
    color: "#b7b7b7",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "20px",
    textTransform: "capitalize !important",
    "&:focus": {
      color: "#000000",
      backgroundColor: "transparent",
    },
    "&:hover": {
      color: "#000000",
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
