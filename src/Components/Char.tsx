import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaGift } from "react-icons/fa6";

type Props = {};

const Charecteristics = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center items-center px-2 my-4 gap-y-3 gap-x-3 ">
      <button className="flex btn px-5 py-2 bg-base-200  items-center gap-x-2 rounded-none ">
        <TbTruckDelivery size={26} />
        <span>Free Delivery</span>
      </button>
      <button className="flex btn px-5 py-2 bg-base-200 items-center gap-x-2 rounded-none">
        <FaGift size={26} />
        <span>Gift Voucher</span>
      </button>
      <button className="flex btn px-5 py-2 bg-base-200 items-center gap-x-2 rounded-none">
        <MdAttachMoney size={26} />
        <span>Money Back</span>
      </button>
      <button className="flex btn  px-5 py-2 bg-base-200  items-center gap-x-2 rounded-none">
        <MdSupportAgent size={26} />
        <span>Free Support</span>
      </button>
    </div>
  );
};

export default Charecteristics;
