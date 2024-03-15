import { graphql } from "../../gql";

export const createTweet = graphql(`
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
