import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const LineButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#000000"),
    backgroundColor: "#07b53b",
    "&:hover": {
      backgroundColor: "#07b53b",
    },
    "&:disabled": {
      backgroundColor: "#bababa",
      color: theme.palette.getContrastText("#000000"),
    },
    fontFamily: ["Arial"].join(","),
    textTransform: "capitalize !important",
    marginTop: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
}))(Button);

export default LineButton;
