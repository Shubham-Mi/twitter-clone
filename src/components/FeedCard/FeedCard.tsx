import Image from "next/image";
import React from "react";
import {
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa6";

function FeedCard() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 p-4 border-t border-border-color hover:bg-background-hover cursor-pointer">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/54065710?v=4"
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <div className="font-bold">Shubham Mittal</div>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, a
            dicta inventore adipisci, iste molestiae sunt autem quo dolores hic
            ea aliquid, explicabo odio expedita? Beatae numquam quam dolor
            tenetur!
          </p>
          <div className="flex justify-between pr-10 mt-4">
            <div>
              <FaRegComment />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
