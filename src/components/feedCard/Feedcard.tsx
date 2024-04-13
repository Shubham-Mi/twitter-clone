import Image from "next/image";
import React, { useCallback } from "react";
import {
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaRetweet,
} from "react-icons/fa6";
import FeedCardProps from "./Feedcard.types";
import Link from "next/link";
import { useLikeTweet, useUnlikeTweet } from "../../../hooks/tweet";
import { useCurrentUser } from "../../../hooks/user";

const FeedCard: React.FC<FeedCardProps> = (props) => {
  const { data } = props;
  const { mutate: mutateLike } = useLikeTweet();
  const { mutate: mutateUnlike } = useUnlikeTweet();
  const { user } = useCurrentUser();

  const handleLike = useCallback(() => {
    mutateLike(data.id);
  }, [data.id, mutateLike]);

  const handleUnlike = useCallback(() => {
    mutateUnlike(data.id);
  }, [data.id, mutateUnlike]);

  return (
    <div>
      <div className="grid grid-cols-12 gap-2 p-4 border-t border-border-color hover:bg-background-hover cursor-pointer">
        <div className="col-span-1">
          <Image
            src={
              data.author?.profileImageUrl
                ? data.author.profileImageUrl
                : "/default-user-profile.png"
            }
            alt="image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <div className="font-bold hover:underline">
            <Link href={`/${data.author?.id}`}>
              {data.author?.firstName} {data.author?.lastName}
            </Link>
          </div>
          <p className="text-justify">{data.content}</p>
          {data.imageUrl && (
            <Image src={data.imageUrl} alt="image" width={300} height={300} />
          )}
          <div className="flex justify-between pr-10 mt-4">
            <div>
              <FaRegComment />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div className="flex gap-2 text-base justify-center">
              {data.likedBy?.find((like) => like?.id === user?.id) ? (
                <FaHeart onClick={handleUnlike} />
              ) : (
                <FaRegHeart onClick={handleLike} />
              )}
              <span>{data.likedBy?.length}</span>
            </div>
            <div>
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
