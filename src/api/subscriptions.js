import { API, graphqlOperation } from "aws-amplify";
import { newOnCreateMessage } from "../graphql/subscriptions";

export async function onCreateNewMessage(setCallee, user, incomingCall) {
  let subscriptionOnCreate = await API.graphql(
    graphqlOperation(newOnCreateMessage)
  ).subscribe({
    next: async (data) => {
      const newMsgObj = data.value.data.newOnCreateMessage;
      if (newMsgObj.isCall && newMsgObj.user.username !== user.username) {
        setCallee({ isCall: true, type: incomingCall.type });
      }
    },
  });
  return subscriptionOnCreate;
}
