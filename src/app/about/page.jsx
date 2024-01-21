import Image from "next/image";
import React from "react";

import { MdProductionQuantityLimits } from "react-icons/md";
import { ImHappy } from "react-icons/im";
import { CiCoffeeCup } from "react-icons/ci";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const data = [
  { name: "Jack Freddy", place: "Founder", img: "/p5.png" },
  { name: "Eloina Lopez", place: "Co-Founder", img: "/p3.png" },
  { name: "Henry Paw", place: "UX/UI Designer", img: "/p7.png" },
  { name: "Talha H", place: "Web Developer", img: "/talha.JPG" },
];

const About = () => {
  return (
    <div>
      <div className="h-[30vh] bg-base-300  ">
        <h1 className="flex justify-center items-center capitalize text-5xl font-bold pt-14">
          About Us
        </h1>
      </div>
      {/* Our Story */}
      <div className="flex flex-col gap-y-8 md:flex-row mt-14 items-center mx-4 px-4 lg:mx-14 lg:px-28 gap-x-11">
        <div className="flex flex-col items-start ">
          <h1 className="text-3xl font-semibold capitalize tracking-wider">
            Our Story
          </h1>
          <p className="text-base font-normal tracking-wide  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis amet blanditiis velit illo tempore quasi adipisci culpa
            voluptas quaerat id? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Molestias consequuntur architecto iure, sunt
            mollitia nesciunt modi adipisci exercitationem dolore pariatur.
          </p>
        </div>
        <Image
          src={"/header.jpg"}
          alt="img"
          width={300}
          height={300}
          className="w-[300px] h-[200px] object-cover"
        />
      </div>
      {/* All Member */}
      <div className="flex flex-col gap-y-7 mt-14 items-center mx-4 px-4 lg:mx-14 lg:px-28 gap-x-11">
        <h1 className="text-3xl font-semibold capitalize tracking-wider">
          All Members
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap  justify-center items-center gap-x-5 gap-y-3">
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-center items-center border rounded-b-2xl  shadow-md cursor-pointer hover:shadow-2xl transition ease-in-out duration-150 delay-150 "
              >
                <Image
                  src={item.img}
                  alt="img"
                  width={800}
                  height={1000}
                  className="w-[220px] h-[270px]"
                />
                <div className="flex flex-col gap-y-1 mt-2 mb-3">
                  <h1 className="text-2xl font-semibold">{item.name}</h1>
                  <p className="text-lg font-medium">{item.place}</p>
                  <div className="flex gap-x-3">
                    <FaFacebook
                      size={20}
                      className="text-blackish hover:text-accent cursor-pointer"
                    />
                    <FaInstagram
                      size={20}
                      className="text-blackish hover:text-accent cursor-pointer"
                    />
                    <FaLinkedinIn
                      size={20}
                      className="text-blackish hover:text-accent cursor-pointer"
                    />
                    <FaYoutube
                      size={20}
                      className="text-blackish hover:text-accent cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Join Now */}
      <div className="flex flex-col gap-y-8 md:flex-row mt-14 items-center mx-4 px-4 lg:mx-14 lg:px-28 gap-x-11">
        <div className="flex flex-col items-start gap-y-2 ">
          <h1 className="text-3xl font-semibold capitalize tracking-wider">
            Do you want to be a part of our team ?
          </h1>
          <p className="text-base font-normal tracking-wide  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis amet blanditiis velit illo tempore quasi adipisci culpa
            voluptas quaerat id?
          </p>
          <button className="btn bg-accent ">Join Now</button>
        </div>
        <Image
          src={"/Smile.jpg"}
          alt="img"
          width={300}
          height={300}
          className="w-[300px] h-[200px] object-cover"
        />
      </div>

      {/* Client */}

      <div className="flex flex-wrap justify-center gap-y-8 md:flex-row mt-14 items-center mx-4 px-4 lg:mx-16 lg:px-32  gap-x-24 mb-14">
        <div className="flex flex-col items-center justify-center">
          <MdProductionQuantityLimits size={28} />
          <h1 className="text-xl font-medium">Products</h1>
          <p className="text-4xl font-medium">30+</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ImHappy size={28} />
          <h1 className="text-xl font-medium">Client Happy</h1>
          <p className="text-4xl font-medium">200+</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <CiCoffeeCup size={28} />
          <h1 className="text-xl font-medium">Cup of Coffee</h1>
          <p className="text-4xl font-medium">50+</p>
        </div>
      </div>
    </div>
  );
};

export default About;
