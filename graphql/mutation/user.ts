import { graphql } from "../../gql";

export const followUserMutation = graphql(`
  #graphql
  mutation FollowUser($userId: ID!) {
    followUser(userId: $userId)
  }
`);

export const unfollowUserMutation = graphql(`
  #graphql
  mutation UnfollowUser($userId: ID!) {
    unfollowUser(userId: $userId)
  }
`);
