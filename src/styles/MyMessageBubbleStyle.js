import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    // marginRight: "20px",
  },
  bubble: {
    backgroundColor: "#c3f69d",
    borderRadius: "20px",
    // maxWidth: "40%",
    padding: "7px 14px 7px 14px",
    marginRight: "10px",
    marginBottom: "10px",
  },
  bubble_pics: {
    backgroundColor: "#c3f69d",
    borderRadius: "20px",
    // maxWidth: "40%",
    padding: "7px 0px 7px 0px",
    marginRight: "10px",
    marginBottom: "10px",
  },
  pictures: {
    width: "7.4vw",
    height: "7.4vw",
    maxWidth: "99px",
    maxHeight: "100px",
    objectFit: "cover",
    borderColor: "whitesmoke",
    borderRadius: "2px",
    marginRight: "2px",
    marginTop: "2px",
    backgroundPosition: "center",
  },
  pic_zero: {
    width: "200px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "2px",
    // marginBottom: "2px",
  },
  container: {
    padding: "0px",
    margin: "0px",
    // lineHeight: "0.9",
    width: "15vw",
    display: "flex",
    maxWidth: "200px",
    // fontSize: "40px",
    // minHeight: "300px",
    // width: "100%",
    // background: "palegreen",
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // gridTemplateRows: "1fr 1fr 1fr",
    // gridGap: "10px",
  },
}));

export default useStyles;
