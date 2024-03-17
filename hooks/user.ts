import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "../clients/api";
import { getCurrentUserQuery, getUserByIdQuery } from "../graphql/query/user";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphQLClient.request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};

export const useUserById = (id: string) => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => graphQLClient.request(getUserByIdQuery, { id }),
  });

  return { ...query, user: query.data?.getUserById };
};
