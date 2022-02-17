import React from "react";
import { AppBar, Toolbar, Button, Divider } from "@material-ui/core";
import useStyles from "../../../styles/SelectionStyle";

const chatTypeSection = [
  { title: "All" },
  { title: "Friends" },
  // { title: "Groups" },
];

const Selection = (props) => {
  const { type } = props;
  const classes = useStyles();
  return (
    <>
      <AppBar
        className={type === "chats" ? classes.appbar : classes.appbarNoMargin}
        elevation={0}
        position="static"
      >
        {type === "chats" ? (
          <Toolbar>
            {chatTypeSection.map((obj, index) => (
              <Button
                disableRipple={true}
                key={index}
                className={classes.chatSection}
                value={obj.title}
                //   onClick={(e) => handleClick(obj.title)}
              >
                {obj.title}
              </Button>
            ))}
          </Toolbar>
        ) : null}
      </AppBar>
      <Divider />
    </>
  );
};

export default Selection;
