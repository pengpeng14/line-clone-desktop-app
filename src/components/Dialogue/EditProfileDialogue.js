import React, { useRef, useState } from "react";
import {
  Avatar,
  Dialog,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
} from "@material-ui/core";
import {
  EditRounded,
  CheckRounded,
  ClearRounded,
  CameraAltOutlined,
} from "@material-ui/icons";
import {
  getImg,
  handleUpdateChange,
  handleUpdateUserPhoto,
} from "../../utils/profile/utils";
import UserStatusDialogue from "./UserStatusDialogue";
import { useStyles } from "./../../styles/profile-style/edit-profile";

function EditProfileDialogue(props) {
  const { isOpen, onClose, user, setUser } = props;
  const [displayName, setDisplayname] = useState(user.displayName);
  const [editDisplayname, setEditDisplayname] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const hiddenUploadProfilePhoto = useRef(null);
  const classes = useStyles();

  async function handleSaveChangedDisplayname(field) {
    if (displayName === user.displayName) {
      setEditDisplayname(false);
      return;
    }
    await handleUpdateChange(field, user.id, displayName);
    setUser({ ...user, displayName });
    setEditDisplayname(false);
  }
  function handleNoChange() {
    setEditDisplayname(false);
  }

  function handleEditStatus() {
    setEditStatus(false);
  }

  async function handleSelectedFile(e, type) {
    const file = e.target.files[0];
    console.log("handleSelectedFile");
    const [location, bucket, region, key] = await handleUpdateUserPhoto(
      user.id,
      file,
      type,
      user
    );
    if (location) {
      console.log(location);
      console.log("updated photo succesfully");
      setUser({ ...user, profilePhoto: { bucket, region, key } });
      return;
    }
    console.log(location);
  }

  function handleSelectPhoto() {
    hiddenUploadProfilePhoto.current.click();
    // select pic area
  }

  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <div style={{ width: "600px", height: "245px" }}>
          <div className={classes.container}>
            <Typography style={{ fontSize: "15px" }}>Settings</Typography>
          </div>
          <Grid container direction="row" xs={12}>
            <Grid item xs={3} className={classes.gridContainer}>
              <Avatar
                src={user.profilePhoto ? getImg(user, "profile") : ""}
                className={classes.avatar}
              ></Avatar>
              <input
                type="file"
                ref={hiddenUploadProfilePhoto}
                onChange={(e) => handleSelectedFile(e, "profile")}
                hidden
              />
              <IconButton
                className={classes.cameraAltIcon}
                onClick={() => handleSelectPhoto()}
              >
                <CameraAltOutlined />
              </IconButton>
            </Grid>
            <Grid item xs={9} style={{ paddingLeft: "40px" }}>
              <div className={classes.infoContainer}>
                <Typography className={classes.displayname}>
                  Display name
                </Typography>
                {editDisplayname ? (
                  <InputBase
                    style={{ marginTop: "3px" }}
                    value={displayName}
                    onChange={(e) => setDisplayname(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end" variant="filled">
                        <IconButton
                          onClick={() =>
                            handleSaveChangedDisplayname("display-name")
                          }
                        >
                          <CheckRounded
                            style={{ fontSize: "15px", color: "green" }}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleNoChange()}>
                          <ClearRounded
                            style={{ fontSize: "15px", color: "maroon" }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                ) : (
                  <Typography>
                    {displayName}
                    <IconButton onClick={() => setEditDisplayname(true)}>
                      <EditRounded style={{ fontSize: "15px" }} />
                    </IconButton>
                  </Typography>
                )}
              </div>
              <div className={classes.infoContainer}>
                <Typography className={classes.status}>
                  Status message
                </Typography>
                <Typography>
                  {user.statusMessage}
                  <IconButton onClick={() => setEditStatus(true)}>
                    <EditRounded style={{ fontSize: "15px" }} />
                  </IconButton>
                </Typography>
              </div>
              <div className={classes.infoContainer}>
                <Typography className={classes.email}>Email</Typography>
                <Typography style={{ marginTop: "7px" }}>
                  {user.email}
                </Typography>
              </div>
              <div className={classes.infoContainer}>
                <Typography className={classes.id}>ID</Typography>
                <Typography style={{ marginTop: "7px" }}>
                  {user.displayName}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Dialog>
      <UserStatusDialogue
        isOpen={editStatus}
        onClose={handleEditStatus}
        setEditStatus={setEditStatus}
        user={user}
        setUser={setUser}
      />
    </>
  );
}

export default EditProfileDialogue;
