import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: "100vh",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  root: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    maxWidth: "100%",
  },
  form: {
    minWidth: "400px",
    maxWidth: "600px",
  },
  boderText: {
    border: "1px solid #dedede",
    borderRadius: "5px",
  },
  textField: {
    padding: "10px 10px 10px 20px",
  },
  resetPassword: {
    textTransform: "capitalize !important",
    color: "#616161",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  regOrLogin: {
    textDecoration: "none",
    marginTop: "20px",
    display: "flex",
    textTransform: "capitalize !important",
    color: "rgb(117,117,117)",
    padding: "0px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logoText: {
    fontSize: "50px",
    fontWeight: "700",
    color: "#07b53b",
    marginBottom: "30px",
  },
  textHead: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
  textDescript: {
    color: "#858585",
    margin: "20px 40px 10px 40px",
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
  },
  errorMessage: {
    color: "rgb(255,85,93)",
    margin: "0px",
  },
  eyeIcon: {
    color: "#bababa",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#858585",
    },
    "&:active": {
      color: "#69b37d",
      backgroundColor: "transparent",
    },
  },
  dialog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  confirmInput: {
    textAlign: "center",
    align: "center",
    "& input": {
      textAlign: "center",
    },
    height: "60px",
    fontSize: "30px",
  },
  confirmBtn: {
    borderRadius: "0px",
    backgroundColor: "#07b53b",
    color: "white",
    "&:disabled": {
      backgroundColor: "#bababa",
    },
  },
}));

export default useStyles;
