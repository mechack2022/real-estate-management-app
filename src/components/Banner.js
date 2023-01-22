import React from "react";
import BannerImage from "../assets/img/house-banner.png";

const Banner = () => {
  return (
    <section className="max-h-[640px] h-full mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-starts text-center lg:text-left jsutify-center flex-1px-4 lg:px-0">
          <span className="text-violet-700">Rent</span>
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            {" "}
            Your Dream House With Us
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            excepturi eos ex molestiae quam illo iure saepe magnam corporis
            natus!
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
