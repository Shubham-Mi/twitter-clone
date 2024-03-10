"use client";
import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphQLClient } from "../../../clients/api";
import { verifyUserGoogleTokenQuery } from "../../../graphql/query/user";

export default function GoogleSignIn() {
  const handleGoogleLogin = useCallback(async (cred: CredentialResponse) => {
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
    if (verifyGoogleToken)
      window.localStorage.setItem("twitter_token", verifyGoogleToken);
  }, []);

  return (
    <div className="border p-5 bg-slate-900 rounded-lg">
      <h1 className="my-2 text-2xl">Sign In</h1>
      <GoogleLogin onSuccess={handleGoogleLogin} />
    </div>
  );
}
