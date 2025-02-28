import React from 'react'
import Slider from "react-slick";
import { SiAdobe } from "react-icons/si";


const Logo_slider = () => {
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6, // Default for large screens
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1280, // For screens below 1280px (Large screens)
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1024, // For screens below 1024px (Tablets)
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768, // For screens below 768px (Small tablets)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480, // For screens below 480px (Mobile)
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};



  return (
    <div>
      <div className="slider-container text-white text-center cursor-pointer ">
        <Slider {...settings}>
          <div className="size-16 pr-5">
            <div className="text-white flex justify-center  items-center text-4xl">
              <SiAdobe className="size-10 " />
              <span className="text-3xl font-ubuntu">Adobe</span>
            </div>
          </div>
          
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto rounded-lg"
              src="/Amazon.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto rounded-lg"
              src="/Axis.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto rounded-lg"
              src="/Airmeet.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full  w-[120px]"
              src="/Apollo.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full  w-[120px]"
              src="/amazonpay.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full  w-[120px] rounded-lg"
              src="/Bina.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto  rounded-lg"
              src="/Dar.svg"
              alt=""
              srcset=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Logo_slider
