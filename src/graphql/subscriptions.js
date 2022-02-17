/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newOnCreateMessage = /* GraphQL */ `
  subscription NewOnCreateMessage {
    newOnCreateMessage {
      id
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        isDirect
        announce {
          nextToken
        }
        files {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      type
      message
      media
      createdAt
      isBlock
      hasRead
      isCall
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      lineID
      displayName
      statusMessage
      profilePhoto {
        bucket
        region
        key
      }
      coverPhoto {
        bucket
        region
        key
      }
      phoneNumber
      groups {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          friendId
          displayName
          createdAt
          updatedAt
        }
        nextToken
      }
      blocked {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      favourites {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      lineID
      displayName
      statusMessage
      profilePhoto {
        bucket
        region
        key
      }
      coverPhoto {
        bucket
        region
        key
      }
      phoneNumber
      groups {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          friendId
          displayName
          createdAt
          updatedAt
        }
        nextToken
      }
      blocked {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      favourites {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      lineID
      displayName
      statusMessage
      profilePhoto {
        bucket
        region
        key
      }
      coverPhoto {
        bucket
        region
        key
      }
      phoneNumber
      groups {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      friends {
        items {
          id
          userId
          friendId
          displayName
          createdAt
          updatedAt
        }
        nextToken
      }
      blocked {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      favourites {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      name
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          type
          message
          createdAt
          isBlock
          hasRead
          isCall
          updatedAt
        }
        nextToken
      }
      isDirect
      announce {
        items {
          id
          type
          message
          createdAt
          isBlock
          hasRead
          isCall
          updatedAt
        }
        nextToken
      }
      files {
        bucket
        region
        key
      }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      name
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          type
          message
          createdAt
          isBlock
          hasRead
          isCall
          updatedAt
        }
        nextToken
      }
      isDirect
      announce {
        items {
          id
          type
          message
          createdAt
          isBlock
          hasRead
          isCall
          updatedAt
        }
        nextToken
      }
      files {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      name
      users {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          type
          message
          createdAt
          isBlock
          hasRead
          isCall
          updatedAt
        }
        nextToken
      }
      isDirect
      announce {
        items {
          id
          type
          message
          createdAt
          isBlock
          hasRead
          isCall
          updatedAt
        }
        nextToken
      }
      files {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserGroups = /* GraphQL */ `
  subscription OnCreateUserGroups {
    onCreateUserGroups {
      id
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        isDirect
        announce {
          nextToken
        }
        files {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserGroups = /* GraphQL */ `
  subscription OnUpdateUserGroups {
    onUpdateUserGroups {
      id
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        isDirect
        announce {
          nextToken
        }
        files {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserGroups = /* GraphQL */ `
  subscription OnDeleteUserGroups {
    onDeleteUserGroups {
      id
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        isDirect
        announce {
          nextToken
        }
        files {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserFriends = /* GraphQL */ `
  subscription OnCreateUserFriends {
    onCreateUserFriends {
      id
      userId
      friendId
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      friend {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      displayName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserFriends = /* GraphQL */ `
  subscription OnUpdateUserFriends {
    onUpdateUserFriends {
      id
      userId
      friendId
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      friend {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      displayName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserFriends = /* GraphQL */ `
  subscription OnDeleteUserFriends {
    onDeleteUserFriends {
      id
      userId
      friendId
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      friend {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      displayName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        isDirect
        announce {
          nextToken
        }
        files {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      type
      message
      media
      createdAt
      isBlock
      hasRead
      isCall
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        isDirect
        announce {
          nextToken
        }
        files {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      type
      message
      media
      createdAt
      isBlock
      hasRead
      isCall
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      user {
        id
        username
        email
        lineID
        displayName
        statusMessage
        profilePhoto {
          bucket
          region
          key
        }
        coverPhoto {
          bucket
          region
          key
        }
        phoneNumber
        groups {
          nextToken
        }
        friends {
          nextToken
        }
        blocked {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        favourites {
          id
          username
          email
          lineID
          displayName
          statusMessage
          phoneNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      group {
        id
        name
        users {
          nextToken
        }
        messages {
          nextToken
        }
        isDirect
        announce {
          nextToken
        }
        files {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      type
      message
      media
      createdAt
      isBlock
      hasRead
      isCall
      updatedAt
    }
  }
`;
