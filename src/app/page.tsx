/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Hero from "@/Components/Hero";
import Char from "@/Components/Char";
import TrendingProducts from "@/Components/TrendingProducts";
import Ads from "@/Components/Ads";
import SaleTime from "@/Components/SaleTime";

export default function Home() {
  return (
    <>
      <Hero />
      <Char />
      <TrendingProducts />
      <div className="px-20">
        <Ads />
      </div>
      <SaleTime/>
    </>
  );
}
