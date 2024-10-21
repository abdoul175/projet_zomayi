"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="maw-h-screen max-w-screen overflow-x-hidden">
        {/* <Providers> */}
        <Header />
        {children}
        <div className="fixed bottom-0 left-0 right-0">
          <Footer />
        </div>
        <ScrollToTop />
        {/* </Providers> */}
      </body>
    </html>
  );
}

import { Providers } from "./providers";
