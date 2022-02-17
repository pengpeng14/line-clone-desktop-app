import {
  createNewGroup,
  createUserstoGroup,
  createFriends,
} from "./../../api/mutations";
import { getUserByUsername } from "./../../api/queries";

export async function findFriendByUsername(username, friends, myUser) {
  let isFriend = false;
  let index = null;
  if (myUser.username === username) {
    return;
  }
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].friend.username === username) {
      isFriend = true;
      index = i;
      break;
    }
  }
  if (isFriend) return `already-friend-${index}`;
  const user = await getUserByUsername(username);
  return user;
}

// assume it success
export async function addFriend(userId, friendId, userName, friendName) {
  const success = await createFriends(userId, friendId);
  const group = await createNewGroup(`${userName}${friendName}`, true);
  const gu = await createUserstoGroup(group.id, userId);
  const gf = await createUserstoGroup(group.id, friendId);
  return [success & gu & gf, group];
}

export function setChatRoom(setChat, group, friend, type) {
  if (type === "new-friend") {
    console.log(friend);
    setChat({
      idGroup: group.id,
      name: group.name,
      sender: "",
      content: "",
      time: "",
      ISOtime: "",
      theirUser: friend,
      messages: [],
      unread: 0,
    });
    return;
  }
  console.log(friend);
  setChat({
    idGroup: group.id,
    name: group.name,
    sender: "",
    content: "",
    time: "",
    ISOtime: "",
    theirUser: friend,
    messages: group.messages,
    unread: 0,
  });
}

export function getGroupId(user, friendUserName) {
  let groupId = null;
  let groupName = null;
  let messages = [];
  const groups = user.groups.items;
  console.log(groups);
  console.log(friendUserName);
  for (let i = 0; i < groups.length; i++) {
    console.log("loop one ");
    if (groups[i].group.isDirect) {
      console.log("isDirect");
      const usersIngroup = groups[i].group.users.items;
      console.log(usersIngroup);
      for (let j = 0; j < usersIngroup.length; j++) {
        if (usersIngroup[j].user.username === friendUserName) {
          console.log("get group id");
          groupId = groups[i].group.id;
          groupName = groups[i].group.name;
          messages = groups[i].group.messages.items;
          break;
        }
      }
    }
    if (groupId) break;
  }
  return [groupId, groupName, messages];
}
