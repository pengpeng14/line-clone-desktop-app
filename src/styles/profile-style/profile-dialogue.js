import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cameraAltIcon: {
    zIndex: 1,
    position: "absolute",
    top: "2px",
    left: "255px",
    color: "whitesmoke",
  },
  imgSize: {
    marginTop: "10px",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  coverPhoto: {
    objectFit: "cover",
    width: "300px",
    height: "200px",
    zIndex: 0,
  },
  editStatusIcon: {
    color: "rgb(173,175,185)",
    width: "8px",
    height: "8px",
    marginBottom: "4px",
  },
  statusText: {
    fontSize: "14px",
    color: "grey",
    marginBottom: "10px",
  },
  displayname: {
    margin: "15px 0px 15px 0px",
  },
  editStatusContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
