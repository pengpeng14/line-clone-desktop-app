import { Dialog, InputBase, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import LineButton from "../../styles/line-button";
import { handleUpdateChange } from "../../utils/profile/utils";
import { useStyles } from "../../styles/profile-style/user-status";

function UserStatusDialogue(props) {
  const { isOpen, onClose, setEditStatus, user, setUser } = props;
  const [status, setStatus] = useState(user.statusMessage);
  const classes = useStyles();
  async function handleSaveChange(field) {
    console.log(user, status);
    await handleUpdateChange(field, user.id, status);
    setStatus(status);
    setUser({ ...user, statusMessage: status });
    setEditStatus(false);
  }

  function handleClose() {
    setStatus(user.statusMessage);
    onClose();
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <div className={classes.container}>
        <textarea
          className={classes.inputBase}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LineButton
            style={{
              height: "30px",
            }}
            onClick={() => handleSaveChange("status-message")}
            disabled={status === user.statusMessage}
          >
            <Typography style={{ fontWeight: "bold" }}>OK</Typography>
          </LineButton>
        </div>
      </div>
    </Dialog>
  );
}

export default UserStatusDialogue;
