import React from 'react'
import { LuArrowRight } from "react-icons/lu";

const Shopify = () => {
  return (
    <div className="bg-[#FFFFFF] h-[468px] lg:flex lg:justify-evenly lg:items-center">
      <div className="rounded-2xl">
        <img
          className="rounded-full h-[268px] w-[268px]"
          src="/men.svg"
          alt=""
        />
      </div>
      <div className="w-[786px] h-[287.64px] lg:flex lg:flex-col lg:justify-between">
        <img
          className="w-[102.34px] h-[29.17px]"
          src="/Shopify.svg"
          alt=""
          srcset=""
        />
        <p className="font-Helvetica font-normal sm:text-[21.56px] sm:w-[756px] text-[]">
          "Superside makes it easy for Shopify's Growth team to get design done
          well and fast.{" "}
          <span className=" font-normal text-black text-[24px]">
            {" "}
            Their platform is intuitive and enables speed. "
          </span>
        </p>
        <p className="text-[16.17px] text-[color/blue/8]">
          Amir Jaffari, Growth Lead at Shopify
        </p>
        <div className="sm:flex sm:items-center sm:justify-between sm:w-[536px] sm:h-[123.47px]">
          <div className="">
            <h1 className="text-[#1700EB] sm:text-[60px] font-Helvetica font-normal">
              250%
            </h1>
            <p>Increase in Click Rate</p>
          </div>
          <div>
            <h1 className="text-[#1700EB] sm:text-[60px] font-Helvetica font-normal">
              192k+
            </h1>
            <p>Increase in Click Rate</p>
          </div>
        </div>
      </div>
      <div className="w-[42.49px] h-[40px] bg-black rounded-full text-white flex justify-center cursor-pointer items-center">
        <LuArrowRight className=" text-xl sm:text-2xl" />
      </div>
    </div>
  );
}

export default Shopify
