import React, { useEffect, useState } from "react";
import { Typography, Dialog, Avatar } from "@material-ui/core";
import { getImg } from "./../../../../utils/profile/utils";
import PhotosBubble from "./PhotosBubble";
import useStyles from "../../../../styles/TheirMessageBubbleStyle";
import { isEmpty } from "../../../../utils/chat-room.js/utils";
import FriendProfileDialogue from "../../../Dialogue/FriendProfileDialogue";

const TheirMessageBubble = (props) => {
  const { message, user, setCaller, idGroup, myUser } = props;
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [fullView, setFullView] = useState([]);
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    console.log("their-message bubble");
    console.log(user);
    function getMedia() {
      message.media &&
        message.media.map((media) => {
          setPhotos((prevPhotos) => [...prevPhotos, media]);
        });
    }
    if (photos.length) {
      return;
    }
    getMedia();
  }, []);

  function handleFullView(index) {
    setOpen(!open);
    if (!open) {
      setFullView(photos[index]);
    }
  }

  function handleProfileDialogue() {
    setOpenProfile(!openProfile);
  }
  return (
    <div className={classes.root}>
      <Avatar
        src={user.profilePhoto ? getImg(user, "profile") : ""}
        style={{ width: "40px", height: "40px", marginLeft: "10px" }}
        onClick={() => handleProfileDialogue()}
      />
      {!isEmpty(message.message) && (
        <Typography className={classes.bubble}>{message.message}</Typography>
      )}
      {!isEmpty(message.media) && (
        <Typography
          className={classes.bubble_pics}
          style={{ backgroundColor: "transparent" }}
        >
          <PhotosBubble
            photos={photos}
            handleFullView={handleFullView}
            type={"their-message"}
            setPhotos={setPhotos}
          />
        </Typography>
      )}

      <Dialog open={open} onClose={() => handleFullView()}>
        <div
          style={{
            backgroundColor: "black",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={fullView}
            style={{
              objectFit: "contain",
              width: "600px",
              height: "400px",
            }}
          />
        </div>
      </Dialog>
      <FriendProfileDialogue
        open={openProfile}
        onclose={handleProfileDialogue}
        friend={user}
        setCaller={setCaller}
        idGroup={idGroup}
        user={myUser}
      />
    </div>
  );
};

export default TheirMessageBubble;
