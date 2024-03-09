import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-14">
        <div className="col-span-3">
          <div className="text-3xl hover:bg-hover-background h-fit rounded-full p-3 cursor-pointer w-fit">
            <FaXTwitter />
          </div>
          <Sidebar />
        </div>
        <div className="col-span-6 border-x-[1px] border-gray-800">Tweets</div>
        <div className="col-span-3">Suggestions</div>
      </div>
    </div>
  );
}
