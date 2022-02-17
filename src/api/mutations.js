import { API, graphqlOperation } from "aws-amplify";
import {
  createGroup,
  createUserFriends,
  createUserGroups,
  updateUser,
  createMessage,
  updateMessage,
} from "./../graphql/mutations";

export async function createFriends(userId, friendId) {
  const success = await API.graphql(
    graphqlOperation(createUserFriends, { input: { userId, friendId } })
  )
    .then(() => true)
    .catch(() => false);
  return success;
}

export async function createNewGroup(name, isDirect) {
  const group = await API.graphql(
    graphqlOperation(createGroup, { input: { name, isDirect } })
  )
    .then((data) => data.data.createGroup)
    .catch(() => null);
  return group;
}

export async function createUserstoGroup(userGroupsGroupId, userGroupsUserId) {
  const success = await API.graphql(
    graphqlOperation(createUserGroups, {
      input: { userGroupsGroupId, userGroupsUserId },
    })
  )
    .then(() => true)
    .catch(() => false);
  return success;
}

export async function updateUserDisplayName(id, displayName) {
  await API.graphql(
    graphqlOperation(updateUser, { input: { id, displayName } })
  );
}

export async function updateUserStatusMessage(id, statusMessage) {
  await API.graphql(
    graphqlOperation(updateUser, {
      input: { id, statusMessage },
    })
  );
}

export async function updateUserphoto(id, photo, type) {
  if (type === "profile") {
    await API.graphql(
      graphqlOperation(updateUser, {
        input: { id, profilePhoto: photo },
      })
    );
    return;
  }
  await API.graphql(
    graphqlOperation(updateUser, {
      input: { id, coverPhoto: photo },
    })
  );
}

export async function createMessageInGroup(message) {
  const data = await API.graphql(
    graphqlOperation(createMessage, { input: message })
  );
  return data.data.createMessage;
}

export const updateMessageHasRead = async (id, hasRead) => {
  const data = await API.graphql(
    graphqlOperation(updateMessage, {
      input: {
        id: id,
        hasRead: hasRead,
      },
    })
  );
  return data;
};
