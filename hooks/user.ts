import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "../clients/api";
import { getCurrentUserQuery } from "../graphql/query/user";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphQLClient.request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};
