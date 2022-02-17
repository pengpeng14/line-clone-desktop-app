import { API, graphqlOperation } from "aws-amplify";
import { getUser, listUsers, messageByDate } from "./../graphql/queries";

export async function getLoggedInUser(id) {
  const user = await API.graphql(graphqlOperation(getUser, { id }))
    .then((data) => data.data.getUser)
    .catch((err) => console.log(err));
  return user;
}

export async function getUserByUsername(username) {
  const user = await API.graphql(
    graphqlOperation(listUsers, { filter: { username: { eq: username } } })
  )
    .then((data) => data.data.listUsers.items[0])
    .catch(() => null);
  return user;
}

export const getUserById = async (id) => {
  const data = await API.graphql(
    graphqlOperation(getUser, {
      id,
    })
  );

  return data.data.getUser;
};

export const getMessagesByDate = async (type) => {
  const data = await API.graphql(
    graphqlOperation(messageByDate, {
      type: type,
      sortDirection: "ASC",
    })
  );

  return data.data.messageByDate;
};
