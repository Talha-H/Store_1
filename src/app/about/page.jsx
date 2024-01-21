import Image from "next/image";
import React from "react";
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
      <div className="flex flex-col gap-y-7 mt-14 items-center mx-4 px-4 lg:mx-14 lg:px-28 gap-x-11">
        <h1 className="text-3xl font-semibold capitalize tracking-wider">
          All Members
        </h1>
        <div className="flex justify-center items-center gap-x-5">
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-center items-center "
              >
                <Image
                  src={item.img}
                  alt="img"
                  width={800}
                  height={1000}
                  className="w-[250px] h-[300px]"
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
    </div>
  );
};

export default About;
