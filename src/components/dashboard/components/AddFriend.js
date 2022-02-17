import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import useStyles from "../../../styles/add-friend-bar";
import AddFriendDialogue from "./../../Dialogue/AddFriendDialogue";

function AddFriend(props) {
  const { user, match, chatRoom, setChat, setFriendList } = props;
  const classes = useStyles();
  const [openAddFriend, setOpenAddFriend] = useState(false);

  function handleAddFriendDialogue() {
    setOpenAddFriend(!openAddFriend);
  }

  return (
    <div className={classes.root}>
      <Button
        disableRipple={true}
        className={classes.feature}
        onClick={() => handleAddFriendDialogue()}
      >
        <PersonAdd className={classes.icon} />
        <Typography
          style={{
            marginLeft: "20px",
            fontWeight: "600",
          }}
        >
          Search for friends
        </Typography>
      </Button>
      <AddFriendDialogue
        user={user}
        onClose={handleAddFriendDialogue}
        isOpen={openAddFriend}
        match={match}
        chatRoom={chatRoom}
        setChat={setChat}
        setFriendList={setFriendList}
      />
    </div>
  );
}

export default AddFriend;
