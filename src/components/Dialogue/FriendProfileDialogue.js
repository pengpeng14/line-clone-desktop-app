import React, { useState } from "react";
import {
  Avatar,
  Dialog,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import { CallRounded, VideocamRounded } from "@material-ui/icons";
import { getImg } from "../../utils/profile/utils";
import { handleCall } from "./../../utils/chat-room/utils";
import { useStyles } from "../../styles/profile-style/profile-dialogue";

function FriendProfileDialogue(props) {
  const { open, onclose, friend, setCaller, idGroup, user } = props;
  const classes = useStyles();
  const [fullPreview, setFullPreview] = useState(false);
  const [img, setImg] = useState(null);

  function handleFullPreview(e) {
    console.log(e.target.src);
    setFullPreview(!fullPreview);
    if (!fullPreview) setImg(e.target.src);
  }

  return (
    <Dialog open={open} onClose={onclose}>
      <div style={{ width: "300px", height: "400px" }}>
        <>
          <img
            src={friend.coverPhoto ? getImg(friend, "cover") : ""}
            onClick={(e) => handleFullPreview(e)}
            className={classes.coverPhoto}
          />
        </>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            src={friend.profilePhoto ? getImg(friend, "profile") : ""}
            onClick={(e) => handleFullPreview(e)}
            className={classes.imgSize}
          ></Avatar>
          <h4 className={classes.displayname}>{friend.displayName}</h4>
          <div className={classes.editStatusContainer}>
            <Typography className={classes.statusText}>
              {friend.statusMessage}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <IconButton
              onClick={() => {
                console.log("audio call");
                // handleCall("audio", setCaller, idGroup, user);
              }}
              style={{ color: "rgb(56,62,80)" }}
            >
              <CallRounded />
            </IconButton>
            <IconButton
              onClick={() => {
                console.log("video call");
                // handleCall("video", setCaller, idGroup, user);
              }}
              style={{ color: "rgb(56,62,80)" }}
            >
              <VideocamRounded />
            </IconButton>
          </div>
        </Grid>
        <Dialog open={fullPreview} onClose={handleFullPreview}>
          <img
            src={img}
            style={{ objectFit: "cover", width: "500px", height: "500px" }}
          />
        </Dialog>
      </div>
    </Dialog>
  );
}

export default FriendProfileDialogue;
