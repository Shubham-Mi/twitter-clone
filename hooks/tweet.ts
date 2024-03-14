import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "../clients/api";
import { getAllTweets } from "../graphql/query/tweet";

export const useGetAllTweets = () => {
  const query = useQuery({
    queryKey: ["all-tweets"],
    queryFn: () => graphQLClient.request(getAllTweets),
  });

  return { ...query, tweets: query.data?.getAllTweets };
};
