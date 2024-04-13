import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphQLClient } from "../clients/api";
import { getAllTweetsQuery } from "../graphql/query/tweet";
import {
  createTweetMutation,
  likeTweetMutation,
  unlikeTweetMutation,
} from "../graphql/mutation/tweet";
import { CreateTweet } from "../gql/graphql";
import toast from "react-hot-toast";

export const useCreateTweet = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: CreateTweet) =>
      graphQLClient.request(createTweetMutation, { payload }),
    onMutate: () => toast.loading("Tweeting!", { id: "loading" }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
      toast.dismiss("loading");
      toast.success("Tweeted successfully!");
    },
  });

  return mutation;
};

export const useGetAllTweets = () => {
  const query = useQuery({
    queryKey: ["all-tweets"],
    queryFn: () => graphQLClient.request(getAllTweetsQuery),
  });

  return { ...query, tweets: query.data?.getAllTweets };
};

export const useLikeTweet = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (tweetId: string) =>
      graphQLClient.request(likeTweetMutation, { tweetId }),
    onMutate: () => toast.loading("Liking!", { id: "loading" }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.dismiss("loading");
      toast.success("Liked!");
    },
  });
  return mutation;
};

export const useUnlikeTweet = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (tweetId: string) =>
      graphQLClient.request(unlikeTweetMutation, { tweetId }),
    onMutate: () => toast.loading("Unliking!", { id: "loading" }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.dismiss("loading");
      toast.success("Unliked!");
    },
  });
  return mutation;
};
