import React, { useEffect, useState } from "react";
import { Typography, Dialog } from "@material-ui/core";
import useStyles from "../../../../styles/MyMessageBubbleStyle";
import PhotosBubble from "./PhotosBubble";
import { isEmpty } from "../../../../utils/chat-room.js/utils";

const MyMessageBubble = (props) => {
  const { message } = props;
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [fullView, setFullView] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("my-message bubble");
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

  return (
    <div className={classes.root}>
      {!isEmpty(message.message) && (
        <Typography className={classes.bubble}>{message.message}</Typography>
      )}
      {!isEmpty(message.media) && (
        <Typography
          className={classes.bubble_pics}
          style={{ backgroundColor: "transparent" }}
          name="nomessage"
        >
          <PhotosBubble
            photos={photos}
            handleFullView={handleFullView}
            type={"my-message"}
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
    </div>
  );
};

export default MyMessageBubble;
