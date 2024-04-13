import { graphql } from "../../gql";

export const createTweetMutation = graphql(`
  #graphql
  mutation CreateTweet($payload: CreateTweet) {
    createTweet(payload: $payload) {
      id
      content
      author {
        id
        email
        profileImageUrl
      }
    }
  }
`);

export const likeTweetMutation = graphql(`
  #graphql
  mutation LikeTweet($tweetId: ID!) {
    likeTweet(tweetId: $tweetId)
  }
`);

export const unlikeTweetMutation = graphql(`
  #graphql
  mutation UnLikeTweet($tweetId: ID!) {
    unLikeTweet(tweetId: $tweetId)
  }
`);
