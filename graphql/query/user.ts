import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query verifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      firstName
      lastName
      profileImageUrl
      tweets {
        id
        content
        imageUrl
        author {
          id
          firstName
          lastName
          profileImageUrl
        }
        likedBy {
          id
          firstName
          lastName
          profileImageUrl
        }
      }
      followers {
        id
        firstName
        lastName
        profileImageUrl
      }
      following {
        id
        firstName
        lastName
        profileImageUrl
      }
      recommendedUsers {
        id
        firstName
        lastName
        profileImageUrl
      }
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      firstName
      lastName
      profileImageUrl
      tweets {
        id
        content
        imageUrl
        author {
          id
          firstName
          lastName
          profileImageUrl
        }
      }
      followers {
        id
      }
      following {
        id
      }
    }
  }
`);
