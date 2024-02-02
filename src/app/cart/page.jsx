import React from "react";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="md:py-20 w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      <div className="title text-[30px] max-w-[800px] mx-auto font-bold text-center md:text-[40px] leading-tight mt-4">
        Shopping cart
      </div>
      <div className="flex flex-col flex-[2] items-center justify-center pb-[50px] md:mt-14">
        <Image
          src="/empty-cart.jpg"
          alt="emptyimg"
          width={300}
          height={300}
          className="w-[300px] md:w-[400px]"
        ></Image>
        <span className="font-bold text-xl capitalize">Your Cart is Empty</span>
        <span className="text-center mt-4">
          Looks Like You have not added anything in your cart <br /> Go Ahead
          and explore something
        </span>
        <Link href="/">
          <button className=" uppercase rounded-full text-xl mt-8 bg-black text-white cursor-pointer py-4 px-8 transition-transform hover:opacity-75 active:scale-95">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
