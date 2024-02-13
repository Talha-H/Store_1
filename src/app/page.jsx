/* eslint-disable react/no-unescaped-entities */
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Hero from "@/Components/Hero";
import Char from "@/Components/Char";
import TrendingProducts from "@/Components/TrendingProducts";
import Ads from "@/Components/Ads";
import SaleTime from "@/Components/SaleTime";
import FashionCollection from "@/Components/FashionCollection";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);

  if (status === "loading") {
    return <>....loading</>;
  }
  if (!session) {
    router.push("/login");
  }
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
