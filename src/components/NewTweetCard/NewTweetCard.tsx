import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useCurrentUser } from "../../../hooks/user";
import { FaImage } from "react-icons/fa6";
import { useCreateTweet } from "../../../hooks/tweet";

export default function NewTweetCard() {
  const [content, setContent] = useState("");
  const { user } = useCurrentUser();
  const { mutate } = useCreateTweet();

  const handleImageSelect = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  }, []);

  const handleCreateTweet = useCallback(() => {
    mutate({ content });
    setContent("");
  }, [content, mutate]);

  return (
    <div>
      <div className="grid grid-cols-12 gap-2 p-4 border-t border-border-color hover:bg-background-hover cursor-pointer">
        <div className="col-span-1">
          <Image
            src={
              user?.profileImageUrl
                ? user.profileImageUrl
                : "/default-user-profile.png"
            }
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          {/* <p className="text-justify">What is happening?!</p> */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="w-full bg-transparent text-xl p-3 border-b border-border-color overflow-visible focus:outline-none"
            placeholder="What is happening?!"
          ></textarea>
          <div className="flex justify-between pr-10 mt-4 items-center">
            <div>
              <FaImage onClick={handleImageSelect} className="text-xl" />
            </div>
            <div>
              <button
                onClick={handleCreateTweet}
                className="bg-primary-color hover:bg-primary-color-hover rounded-full px-4 py-2 w-fit font-bold transition-all"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
