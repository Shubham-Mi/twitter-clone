"use client";
import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function GoogleSignIn() {
  const handleGoogleLogin = useCallback((cred: CredentialResponse) => {
    console.log(cred);
  }, []);

  return (
    <div className="border p-5 bg-slate-900 rounded-lg">
      <h1 className="my-2 text-2xl">Sign In</h1>
      <GoogleLogin onSuccess={handleGoogleLogin} />
    </div>
  );
}
