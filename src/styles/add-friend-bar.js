import { makeStyles } from "@material-ui/styles";

const chatListWidth = "35%";

const useStyles = makeStyles((theme) => ({
  root: {
    width: chatListWidth,
    overflowY: "auto",
    // overflow: "hidden",
    height: `calc(99vh)`,
    marginLeft: "80px",
    minWidth: "400px",
  },
  icon: {
    fontSize: "30px",
    backgroundColor: "#efefef",
    borderRadius: "50%",
    padding: "10px 10px 10px 10px",
  },
  feature: {
    width: "100%",
    // minWidth: "400px",
    height: 80,
    "&:hover": {
      backgroundColor: "#f3f3f3",
    },
    "&:focus": {
      backgroundColor: "#f3f3f3",
    },
    textTransform: "capitalize !important",
    // padding: "10px 20px 10px 10px",
    paddingLeft: "40px",
    display: "flex",
    justifyContent: "flex-start",
  },
}));

export default useStyles;
