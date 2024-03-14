import FeedCard from "@/components/FeedCard";
import NewTweetCard from "@/components/NewTweetCard";
import Sidebar from "@/components/sidebar";
import React from "react";
import { useGetAllTweets } from "../../hooks/tweet";
import { Tweet } from "../../gql/graphql";

export default function Home() {
  const { tweets } = useGetAllTweets();

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-14">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-6 border-x-[1px] border-border-color h-screen overflow-auto">
          <NewTweetCard />
          {tweets?.map((tweet) =>
            tweet ? <FeedCard key={tweet.id} data={tweet as Tweet} /> : null
          )}
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
