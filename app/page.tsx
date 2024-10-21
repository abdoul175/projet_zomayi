"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

import { Inter } from "@next/font/google";

import Component1 from "@/components/Component1";
import Component2 from "@/components/Component2";
import Component3 from "@/components/Component3";
import Component4 from "@/components/Component4";
import Component5 from "@/components/Component5";
import Component6 from "@/components/Component6";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Component1 />
      <Component4 />
      <Component2 />
      <Component3 />
      <Component5 />
      <Component6 /> */}
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
