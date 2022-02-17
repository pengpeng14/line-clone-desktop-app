import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    width: "200px",
    height: "200px",
    padding: "10px",
  },
  inputBase: {
    height: "140px",
    width: "195px",
    fontFamily: "Roboto, sans-serif",
    borderColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },
}));
