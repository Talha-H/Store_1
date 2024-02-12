/* eslint-disable react/no-unescaped-entities */
import Hero from "@/Components/Hero";
import Char from "@/Components/Char";
import TrendingProducts from "@/Components/TrendingProducts";
import Ads from "@/Components/Ads";
import SaleTime from "@/Components/SaleTime";
import FashionCollection from "@/Components/FashionCollection";

export default function Home() {
  return (
    <>
      <Hero />
      <Char />
      <TrendingProducts />
      <div className="px-20">
        <Ads />
      </div>
      <SaleTime />
      <FashionCollection />
    </>
  );
}
