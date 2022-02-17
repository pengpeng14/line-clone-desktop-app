import { generatePath } from "react-router";
import { scrollToBottom } from "./ScrollView";
const electron = window.require("electron");

export const showNotification = (idGroup, dispatch, newMsgObj) => {
  const notification = new Notification(newMsgObj.user.username, {
    body: newMsgObj.message,
  });

  // console.log("id of new msg", idGroup);
  // Every states are empty, that's why we need reducer
  dispatch({ type: "add", payload: newMsgObj, onClick: "noClick" });

  notification.onclick = (e) => {
    e.preventDefault();
    // console.log(window.location.href);

    // Every states are empty, that's why we need reducer
    dispatch({ type: "add", payload: newMsgObj, onClick: "onClick" });

    electron.ipcRenderer.send("notificationOn", "hello from main windows");
    electron.ipcRenderer.on("notificationOn-response", (e, args) => {
      console.log(args);
    });

    OpenOnce(`http://localhost:3000/#/dashboard/${idGroup}`);
  };
};

function OpenOnce(url) {
  // if the "target" window was just opened, change its url
  // console.log("open by notification");
  window.location.href = url;
}
