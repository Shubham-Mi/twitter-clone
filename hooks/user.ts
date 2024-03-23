import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphQLClient } from "../clients/api";
import { getCurrentUserQuery, getUserByIdQuery } from "../graphql/query/user";
import {
  followUserMutation,
  unfollowUserMutation,
} from "../graphql/mutation/user";
import toast from "react-hot-toast";

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

export const useFollowUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userId: string) =>
      graphQLClient.request(followUserMutation, { userId }),
    onMutate: () => toast.loading("Following!", { id: "loading" }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.dismiss("loading");
      toast.success("Following!");
    },
  });
  return mutation;
};

export const useUnfollowUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userId: string) =>
      graphQLClient.request(unfollowUserMutation, { userId }),
    onMutate: () => toast.loading("Unfollowing!", { id: "loading" }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.dismiss("loading");
      toast.success("Unfollowed!");
    },
  });
  return mutation;
};
