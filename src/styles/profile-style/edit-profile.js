import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "rgb(42,51,74)",
    color: "white",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35px",
  },
  gridContainer: {
    padding: "25px 8px 10px 20px",
  },
  avatar: {
    width: "130px",
    height: "130px",
    zIndex: 0,
  },
  cameraAltIcon: {
    zIndex: 1,
    position: "absolute",
    top: "175px",
    left: "105px",
    color: "grey",
    backgroundColor: "whitesmoke",
    borderWidth: "10px",
    borderColor: "grey",
    width: "30px",
    height: "30px",
    "&:hover": {
      backgroundColor: "white",
      color: "rgb(45,54,73)",
    },
  },
  infoContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "50px",
  },
  displayname: {
    marginTop: "7px",
    marginRight: "50px",
    fontWeight: "bold",
  },
  status: {
    marginTop: "7px",
    marginRight: "31px",
    fontWeight: "bold",
  },
  email: {
    marginTop: "7px",
    marginRight: "111px",
    fontWeight: "bold",
  },
  id: {
    marginTop: "7px",
    marginRight: "139px",
    fontWeight: "bold",
  },
}));
