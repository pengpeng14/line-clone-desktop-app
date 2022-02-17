import { createMessageInGroup } from "../../api/mutations";

export async function handleCall(type, setCaller, idGroup, user) {
  console.log(type);
  setCaller({ type });
  const message = {
    type: idGroup,
    message: "Calling",
    messageUserId: user.id,
    messageGroupId: idGroup,
    isBlock: false,
    isCall: true,
  };
  console.log("create message#1 ", message);
  await createMessageInGroup(message);
}
export function handleCallerDialogue(setCaller, setCall) {
  setCall({ isCall: false, caller: null });
  setCaller({ type: "audio" });
}

export function handleCalleeDialogue(setCallee, setCall) {
  setCall({ isCall: false, caller: null });
  setCallee({ type: "audio" });
}

export function handleCallMenu(e, anchorEl, setAnchorEl) {
  if (anchorEl) {
    setAnchorEl(null);
    return;
  }
  setAnchorEl(e.currentTarget);
}
