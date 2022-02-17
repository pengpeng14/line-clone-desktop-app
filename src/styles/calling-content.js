import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
  },
  media: {
    objectFit: "cover",
    width: "480px",
    height: "480px",
  },
  videocamIcon: {
    backgroundColor: "rgb(42,51,74)",
    color: "whitesmoke",
    "&:hover": {
      backgroundColor: "rgb(42,51,74)",
    },
  },
  callEndIcon: {
    backgroundColor: "rgb(255,54,60)",
    color: "whitesmoke",
    marginRight: "40px",
    "&:hover": {
      backgroundColor: "rgb(255,54,60)",
    },
  },
  callIcon: {
    backgroundColor: "rgb(0,200,49)",
    color: "whitesmoke",
    marginRight: "40px",
    "&:hover": {
      backgroundColor: "rgb(0,200,49)",
    },
  },
}));

export default useStyles;
