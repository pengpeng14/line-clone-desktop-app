/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          group {
            id
            name
            isDirect
            messages {
              items {
                message
                user {
                  id
                  username
                  displayName
                  statusMessage
                }
              }
            }
            users {
              items {
                user {
                  id
                  username
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
                }
              }
            }
          }
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
          friend {
            username
            displayName
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
          }
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            group {
              id
              name
              isDirect
              users {
                items {
                  user {
                    id
                    username
                    createdAt
                    updatedAt
                  }
                }
                nextToken
              }
            }
          }
        }
        friends {
          items {
            friend {
              id
              username
            }
          }
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
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      users {
        items {
          user {
            id
            username
            createdAt
            updatedAt
          }
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
          user {
            id
            username
          }
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
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
        group {
          id
          name
          isDirect
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
      nextToken
    }
  }
`;
export const messageByDate = /* GraphQL */ `
  query MessageByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messageByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
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
        group {
          id
          name
          isDirect
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
      nextToken
    }
  }
`;
