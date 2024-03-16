"use client";
import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphQLClient } from "../../../clients/api";
import { verifyUserGoogleTokenQuery } from "../../../graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../hooks/user";
import Image from "next/image";

export default function SignIn() {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const handleGoogleLogin = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error("Error loging in with Google");
      const { verifyGoogleToken } = await graphQLClient.request(
        verifyUserGoogleTokenQuery,
        {
          token: googleToken,
        }
      );

      toast.success("Login successfully");
      console.log(verifyGoogleToken);
      if (verifyGoogleToken) {
        window.localStorage.setItem("twitter_token", verifyGoogleToken);
      }
      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
    [queryClient]
  );

  return (
    <div className="mb-4 sm:pl-3 sm:pr-7 sm:py-3 rounded-full hover:bg-background-hover w-fit cursor-pointer">
      {user ? (
        <div className="flex gap-4 text-xl">
          <Image
            className="rounded-full"
            src={
              user?.profileImageUrl
                ? user.profileImageUrl
                : "/default-user-profile.png"
            }
            alt="user-profile"
            width={50}
            height={50}
          />
          <h3 className="hidden sm:block">
            {user.firstName} {user.lastName}
          </h3>
        </div>
      ) : (
        <div>
          <GoogleLogin onSuccess={handleGoogleLogin} />
        </div>
      )}
    </div>
  );
}
