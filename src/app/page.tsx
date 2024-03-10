import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import Sidebar from "@/components/sidebar";
import FeedCard from "@/components/FeedCard";
import GoogleSignIn from "@/components/GoogleSignIn";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-14">
        <div className="col-span-3">
          <div className="text-3xl hover:bg-background-hover h-fit rounded-full p-3 cursor-pointer w-fit transition-all">
            <FaXTwitter />
          </div>
          <Sidebar />
        </div>
        <div className="col-span-6 border-x-[1px] border-border-color h-screen overflow-auto">
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
        <div className="col-span-3">
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
}
