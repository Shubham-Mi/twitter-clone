"use client";
import React from "react";
import NewTweetCard from "@/components/NewTweetCard";
import FeedCard from "@/components/FeedCard";
import { Tweet } from "../../../gql/graphql";
import { useGetAllTweets } from "../../../hooks/tweet";

export default function Page() {
  const { tweets } = useGetAllTweets();

  return (
    <div>
      <NewTweetCard />
      {tweets?.map((tweet) =>
        tweet ? <FeedCard key={tweet.id} data={tweet as Tweet} /> : null
      )}
    </div>
  );
}
