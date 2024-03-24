import React, { useCallback } from "react";
import { useCurrentUser, useFollowUser } from "../../../hooks/user";
import Image from "next/image";
import Link from "next/link";

export default function Recommendation() {
  const { user } = useCurrentUser();
  const { mutate } = useFollowUser();

  const handleFollowUser = useCallback(
    (id: string) => {
      mutate(id);
    },
    [mutate]
  );

  return (
    <div className="flex flex-col gap-3 mt-4 ml-8 bg-secondary-color rounded-2xl py-4">
      <h1 className="text-xl px-4">Who to follow</h1>
      <div>
        {user?.recommendedUsers?.map((rec) => (
          <div
            key={rec?.id}
            className="flex gap-2 justify-between hover:bg-secondary-color-hover px-4 py-2"
          >
            <Image
              src={
                rec?.profileImageUrl
                  ? rec?.profileImageUrl
                  : "/default-user-profile.png"
              }
              alt="image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-bold hover:underline h-fit">
              <Link href={`/${rec?.id}`}>
                {rec?.firstName} {rec?.lastName}
              </Link>
            </span>
            <button
              onClick={() => handleFollowUser(rec?.id ? rec.id : "home")}
              className="bg-white text-black hover:bg-gray-300 rounded-full px-2 py-1 w-fit h-fit font-bold transition-all"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
