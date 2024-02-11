"use client";
import React from "react";
import AccessProducts from "@/Components/AccessProducts";
import { useState, useEffect } from "react";

const fetchData = async () => {
  const res = await fetch(process.env.API_URL_ALL);
  if (!res.ok) {
    throw new Error(`HTTP-Error: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

const Accessories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData();
      if (result) {
        // Shorten the title for each product
        const shortenedData = result.map((product) => ({
          ...product,
          title: shortenTitle(product.title, 15), // Adjust the desired length
        }));
        setData(shortenedData);
      }
    };
    fetchDataFromApi();
  }, []);

  // Function to shorten the title
  const shortenTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div>
      <div className="h-[30vh] bg-base-300  ">
        <h1 className="flex justify-center items-center capitalize text-5xl font-bold pt-14">
          Our Accessories
        </h1>
      </div>
      <div className="flex mt-14 mb-14 px-3 md:px-32">
        <AccessProducts data={data} />
      </div>
    </div>
  );
};

export default Accessories;
