"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { useCurrentUser, useUserById } from "../../../hooks/user";
import Image from "next/image";
import FeedCard from "@/components/FeedCard";
import { Tweet } from "../../../gql/graphql";

export default function Page({ params }: { params: { userId: string } }) {
  const { user } = useUserById(params.userId);

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
          <h1 className="text-md text-slate-400">100 tweets</h1>
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
        <h1 className="text-2xl font-bold mt-5">
          {user?.firstName} {user?.lastName}
        </h1>
      </div>
      <div>
        {user?.tweets?.map((tweet) =>
          tweet ? <FeedCard key={tweet.id} data={tweet as Tweet} /> : null
        )}
      </div>
    </div>
  );
}
