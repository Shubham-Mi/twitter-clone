"use client";
import { FaArrowLeft } from "react-icons/fa6";
import {
  useCurrentUser,
  useFollowUser,
  useUnfollowUser,
  useUserById,
} from "../../../hooks/user";
import Image from "next/image";
import FeedCard from "@/components/feedCard";
import { Tweet } from "../../../gql/graphql";
import { useCallback, useMemo } from "react";

export default function Page({ params }: { params: { userId: string } }) {
  const { user } = useUserById(params.userId);
  const { user: currentUser } = useCurrentUser();
  const { mutate: mutateFollow } = useFollowUser();
  const { mutate: mutateUnfollow } = useUnfollowUser();

  const isFollowing = useMemo(() => {
    if (!currentUser) return false;
    return (
      (currentUser.following?.findIndex((el) => el?.id === params.userId) ??
        -1) >= 0
    );
  }, [currentUser, params.userId]);

  const handleFollowUser = useCallback(() => {
    mutateFollow(params.userId);
  }, [mutateFollow, params.userId]);

  const handleUnfollowUser = useCallback(() => {
    mutateUnfollow(params.userId);
  }, [mutateUnfollow, params.userId]);

  return (
    <div>
      <nav className="flex gap-3 items-center p-3">
        <div className="text-3xl hover:bg-background-hover h-fit rounded-full py-3 sm:px-3 cursor-pointer w-fit transition-all">
          <FaArrowLeft />
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            {user?.firstName} {user?.lastName}
          </h1>
          <h1 className="text-md text-slate-400">
            {user?.tweets?.length} Posts
          </h1>
        </div>
      </nav>
      <div className="p-4 border-b border-border-color">
        <Image
          src={
            user?.profileImageUrl
              ? user.profileImageUrl
              : "/default-user-profile.png"
          }
          alt="image"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex justify-between mt-5 mx-2 items-center">
          <div>
            <h1 className="text-2xl font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
            <div className="flex gap-3">
              <h1 className="text-md text-slate-400 flex gap-1">
                <span className="text-white">{user?.following?.length}</span>
                <span>Following</span>
              </h1>
              <h1 className="text-md text-slate-400 flex gap-1">
                <span className="text-white">{user?.followers?.length}</span>
                <span>Followers</span>
              </h1>
            </div>
          </div>
          <div>
            {user?.id !== currentUser?.id && (
              <>
                {isFollowing ? (
                  <button
                    onClick={handleUnfollowUser}
                    className="bg-white text-black hover:bg-gray-300 rounded-full px-4 py-2 w-fit font-bold transition-all"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={handleFollowUser}
                    className="bg-white text-black hover:bg-gray-300 rounded-full px-4 py-2 w-fit font-bold transition-all"
                  >
                    Follow
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        {user?.tweets?.map((tweet) =>
          tweet ? <FeedCard key={tweet.id} data={tweet as Tweet} /> : null
        )}
      </div>
    </div>
  );
}
