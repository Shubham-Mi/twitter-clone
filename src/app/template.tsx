"use client";
import RecommendBar from "@/components/recommendBar";
import Sidebar from "@/components/sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="8232000391-19qf54pm6v1faf8igjk0sagmjnusd2p1.apps.googleusercontent.com">
          <div className="grid grid-cols-12 h-screen w-screen sm:px-7 md:px-14">
            <div className="col-span-2 sm:col-span-3">
              <Sidebar />
            </div>
            <div className="container__main col-span-10 sm:col-span-6 border-x-[1px] border-border-color h-screen overflow-auto">
              {children}
            </div>
            <div className="col-span-0 sm:col-span-3">
              <RecommendBar />
            </div>
          </div>
          <Toaster />
          <ReactQueryDevtools />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  );
}
