/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-[#f6f6f6] ">
      <div className="flex flex-col  md:flex-[2]  justify-center items-center gap-y-3 ">
        <span className="text-2xl font-normal capitalize">Trend Design!</span>
        <h1 className="text-2xl ml-4 md:text-6xl font-bold uppercase">Women's Wear</h1>
        <span className=" hidden md:flex bg-base-100 shadow-lg text-base px-3 py-1 font-light w-max rounded-2xl">
          20% discount over 40$ purchase use Code 0145698
        </span>
        <button className="btn w-max bg-accent mt-5  text-xl md:text-2xl hover:bg-accent flex ">
          shop now
        </button>
      </div>
      <div className="flex flex-1">
        <Image
          src={"/h-1.jpg"}
          alt=""
          className="w-screen "
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
