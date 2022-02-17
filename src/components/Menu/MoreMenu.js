import { Divider, Menu, MenuItem } from "@material-ui/core";
import React, { useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import { useHistory } from "react-router-dom";

function MoreMenu(props) {
  const { onClose, anchorEl } = props;
  const history = useHistory();

  useEffect(() => {
    const setAuthListener = () => {
      Hub.listen("auth", (data) => {
        switch (data.payload.event) {
          case "signOut":
            console.log(data.payload.event);
            history.push("/");

            break;
          default:
            break;
        }
      });
    };
    setAuthListener();
  }, []);

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        id="simple-menu"
        keepMounted
      >
        <MenuItem
          onClick={() => Auth.signOut()}
          style={{ fontSize: "15px", height: "20px", marginBottom: "5px" }}
        >
          Log Out
        </MenuItem>
        <Divider />
        <MenuItem
          // onClick={() => signout(setForm)}
          style={{ fontSize: "15px", height: "20px", marginTop: "5px" }}
        >
          Quit
        </MenuItem>
      </Menu>
    </>
  );
}

export default MoreMenu;
