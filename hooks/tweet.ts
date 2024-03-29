import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphQLClient } from "../clients/api";
import { getAllTweetsQuery } from "../graphql/query/tweet";
import { createTweetMutation } from "../graphql/mutation/tweet";
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
