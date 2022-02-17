import React, { useState, useRef } from "react";
import {
  Avatar,
  Dialog,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { CameraAltOutlined, EditRounded } from "@material-ui/icons";
import EditProfileDialogue from "./EditProfileDialogue";
import { getImg, handleUpdateUserPhoto } from "../../utils/profile/utils";
import { useStyles } from "../../styles/profile-style/profile-dialogue";
import UserStatusDialogue from "./UserStatusDialogue";

function ProfileDialogue(props) {
  const { isOpen, onClose, user, setUser } = props;
  const classes = useStyles();
  const [editProfile, setEditProfile] = useState(false);
  const [fullPreview, setFullPreview] = useState(false);
  const [img, setImg] = useState(null);
  const hiddenUploadCoverPhoto = useRef(null);
  const [editStatus, setEditStatus] = useState(false);

  console.log(user.profilePhoto);
  console.log(user.coverPhoto);

  function handleEditProfile() {
    if (!editProfile) onClose();
    setEditProfile(!editProfile);
  }

  function handleFullPreview(e) {
    console.log(e.target.src);
    setFullPreview(!fullPreview);
    if (!fullPreview) setImg(e.target.src);
  }

  function handleSelectCoverPhoto() {
    hiddenUploadCoverPhoto.current.click();
  }

  async function handleSelectedFile(e) {
    const file = e.target.files[0];
    const [location, bucket, region, key] = await handleUpdateUserPhoto(
      user.id,
      file,
      "cover",
      user
    );
    if (location) {
      console.log(location);
      console.log("upload cover photo successfully");
      setUser({ ...user, coverPhoto: { bucket, region, key } });
    }
  }
  function handleEditStatusDialogue() {
    setEditStatus(false);
  }

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} user={user}>
        <div style={{ width: "300px", height: "400px" }}>
          <>
            <input
              hidden
              type="file"
              ref={hiddenUploadCoverPhoto}
              onChange={(e) => handleSelectedFile(e)}
            />
            <IconButton
              onClick={() => handleSelectCoverPhoto()}
              className={classes.cameraAltIcon}
            >
              <CameraAltOutlined fontSize="small" />
            </IconButton>
            <img
              src={user.coverPhoto ? getImg(user, "cover") : ""}
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
              src={user.profilePhoto ? getImg(user, "profile") : ""}
              onClick={(e) => handleFullPreview(e)}
              className={classes.imgSize}
            ></Avatar>
            <h4 className={classes.displayname}>{user.displayName}</h4>
            <div className={classes.editStatusContainer}>
              <Typography className={classes.statusText}>
                {user.statusMessage}
              </Typography>
              <IconButton
                onClick={() => setEditStatus(true)}
                className={classes.editStatusIcon}
              >
                <EditRounded fontSize="small" />
              </IconButton>
            </div>
            <div style={{ display: "flex" }}>
              <IconButton
                onClick={() => handleEditProfile()}
                style={{ color: "rgb(42,51,74)" }}
              >
                <EditRounded />
              </IconButton>
            </div>
          </Grid>
        </div>
        <Dialog open={fullPreview} onClose={handleFullPreview}>
          <img
            src={img}
            style={{ objectFit: "cover", width: "500px", height: "500px" }}
          />
        </Dialog>
      </Dialog>
      <EditProfileDialogue
        isOpen={editProfile}
        onClose={handleEditProfile}
        user={user}
        setUser={setUser}
      />
      <UserStatusDialogue
        isOpen={editStatus}
        onClose={handleEditStatusDialogue}
        setEditStatus={setEditStatus}
        user={user}
        setUser={setUser}
      />
    </>
  );
}

export default ProfileDialogue;
