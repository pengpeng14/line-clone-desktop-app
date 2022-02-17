import { Menu, MenuItem, Typography } from "@material-ui/core";
import { CallRounded, VideocamRounded } from "@material-ui/icons";
import { handleCall } from "./../../utils/chat-room/utils";

function CallMenu(props) {
  const { setCaller, idGroup, user, onclose, anchorEl } = props;
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onclose}
        keepMounted
      >
        <MenuItem onClick={() => handleCall("audio", setCaller, idGroup, user)}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CallRounded style={{ marginRight: "5px" }} />
            <Typography>Voice Call</Typography>
          </div>
        </MenuItem>
        <MenuItem onClick={() => handleCall("video", setCaller, idGroup, user)}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <VideocamRounded style={{ marginRight: "5px" }} />
            <Typography>Video Call</Typography>
          </div>
        </MenuItem>
      </Menu>
    </>
  );
}

export default CallMenu;
