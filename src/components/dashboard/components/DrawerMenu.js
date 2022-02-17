import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
  Switch,
} from "react-router-dom";
import { Drawer, IconButton, Typography } from "@material-ui/core";
import {
  Person,
  PersonAdd,
  WatchLater,
  MoreHoriz,
  VolumeDownOutlined,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreMenu from "../../Menu/MoreMenu";
import { faCommentDots, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import useStyles from "../../../styles/DrawerMenuStyle";

const DrawerMenu = (props) => {
  const { match, setSelection, countNoti } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleMoreIconClick(e) {
    if (anchorEl) {
      setAnchorEl(null);
      return;
    }
    setAnchorEl(e.currentTarget);
  }

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <IconButton
          disableRipple={true}
          className={classes.iconButton}
          onClick={() => {
            setSelection("profile");
          }}
        >
          <Person
            className={classes.iconMtDrawer}
            style={{ marginTop: "30px" }}
          />
        </IconButton>

        <IconButton
          disableRipple={true}
          className={classes.iconButton}
          style={{ marginLeft: "2px" }}
          onClick={() => {
            setSelection("chats");
          }}
        >
          <FontAwesomeIcon
            className={classes.iconAweDrawer}
            icon={faCommentDots}
          />
          <div className={countNoti == 0 ? null : classes.notiBox}>
            <Typography className={countNoti == 0 ? null : classes.noti}>
              {countNoti == 0 ? null : countNoti}
            </Typography>
          </div>
        </IconButton>

        <IconButton
          disableRipple={true}
          className={classes.iconButton}
          onClick={() => {
            setSelection("addfriends");
          }}
        >
          <PersonAdd className={classes.iconMtDrawer} />
        </IconButton>
        <IconButton disableRipple={true} className={classes.iconButton}>
          <WatchLater className={classes.iconMtDrawer} />
        </IconButton>
        <IconButton disableRipple={true} className={classes.iconButton}>
          <FontAwesomeIcon
            className={classes.iconAweDrawer}
            icon={faNewspaper}
          />
        </IconButton>

        <div className={classes.drawerIconBottom}>
          <IconButton disableRipple={true} className={classes.iconButton}>
            <VolumeDownOutlined className={classes.iconMtDrawer} />
          </IconButton>
          <IconButton
            disableRipple={true}
            className={classes.iconButton}
            onClick={(e) => handleMoreIconClick(e)}
          >
            <MoreHoriz className={classes.iconMtDrawer} />
          </IconButton>
        </div>
        {anchorEl && (
          <MoreMenu onClose={handleMoreIconClick} anchorEl={anchorEl} />
        )}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
