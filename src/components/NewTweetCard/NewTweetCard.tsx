import Image from "next/image";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useCurrentUser } from "../../../hooks/user";
import { FaImage } from "react-icons/fa6";
import { useCreateTweet } from "../../../hooks/tweet";
import { graphQLClient } from "../../../clients/api";
import { getSignedUrlQuery } from "../../../graphql/query/tweet";
import toast from "react-hot-toast";

export default function NewTweetCard() {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { user } = useCurrentUser();
  const { mutate } = useCreateTweet();

  const handleImageUpload = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault();

      const file: File | undefined | null = input.files?.item(0);
      if (!file) return;

      const { getSignedUrl } = await graphQLClient.request(getSignedUrlQuery, {
        imageName: file.name,
        imageType: file.type,
      });

      if (getSignedUrl) {
        toast.loading("Uploading image", { id: file.name });
        await axios.put(getSignedUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
        toast.success("Image uploaded", { id: file.name });

        const url = new URL(getSignedUrl);
        const uploadedImageUrl = `${url.origin}${url.pathname}`;
        setImageUrl(uploadedImageUrl);
      }
    };
  }, []);

  const handleImageSelect = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.addEventListener("change", handleImageUpload(input));
    input.click();
  }, [handleImageUpload]);

  const handleCreateTweet = useCallback(() => {
    mutate({ content, imageUrl });
    setContent("");
    setImageUrl("");
  }, [content, imageUrl, mutate]);

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
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="uploaded-image"
              width={300}
              height={300}
            />
          )}
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
