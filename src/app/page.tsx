/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Hero from "@/Components/Hero";
import Char from "@/Components/Char";
import TrendingProducts from "@/Components/TrendingProducts"


export default function Home() {
  return (
    <>
      <Hero />
      <Char />
      <TrendingProducts/>
     
    </>
  );
}
