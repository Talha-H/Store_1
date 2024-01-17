import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="flex flex-col items-start gap-y-2 bg-base-300 py-3 px-1 md:px-2 shadow-lg ">
      <Link href={"https://web.facebook.com"} target="_blank">
        <FaFacebookF size={28} fill="#316FF6" />
      </Link>
      <Link href={"https://web.instagram.com"} target="_blank">
        <FaInstagram size={28} fill="#ca317a" />
      </Link>
      <Link href={"https://web.youtube.com"} target="_blank">
        <FaYoutube size={28} fill="#CD201F" />
      </Link>
      <Link href={"https://web.linkedin.com"} target="_blank">
        <FaLinkedin size={28} fill="#0077b5" />
      </Link>
      <Link href={"https://web.github.com"} target="_blank">
        <FaGithub size={28} fill="#2b3137" />
      </Link>
    </div>
  );
};

export default Social;
