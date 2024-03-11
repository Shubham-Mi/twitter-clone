import FeedCard from "@/components/FeedCard";
import NewTweetCard from "@/components/NewTweetCard";
import Sidebar from "@/components/sidebar";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-14">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-6 border-x-[1px] border-border-color h-screen overflow-auto">
          <NewTweetCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
