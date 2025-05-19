"use client";
import React from "react";
import Image from "next/image";

const Section_1 = () => {
  return (
    <div className="section-1 @container mx-auto">
      <div className="flex gap-2 flex-wrap md:m-3">
        <div className="xl:flex-1/3 flex-1 md:ps-20 ps-4 py-10 bg-blue-700 text-white relative">
          <p className="xl:text-[37px] leading-none font-bold xl:w-[350px]">
            “We have drastically improved all of our KPIs... customer
            satisfaction is higher than ever!”
          </p>
          <div className="pt-5">
            <span>
              Monica Parez, Head of CS,
              <br />{" "}
            </span>{" "}
            <span>SignEasy, Inc</span>
          </div>
          <div className=" absolute bottom-6 right-4 invert-100">
            <Image
              src="/signeasy-logo.svg"
              width={150}
              height={40}
              alt="sign"
            />
          </div>
        </div>
        <div className="xl:flex-1/2 relative overflow-hidden w-full">
          <div className="flex justify-center   items-center  transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110 ">
            <Image
              src="/supportyourapp-main-video-chris.jpg"
              width={720}
              height={0}
              alt="video"
            ></Image>
            <div className="absolute transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110">
              <div className="relative w-[280px]  top-[50%] bg-red-500 p-3 rounded-2xl text-white font-bold">
                {" "}
                On Board with crish(in 264 sec)
                <Image
                  src="/play-icon.svg"
                  width={20}
                  height={0}
                  alt="play"
                  className="absolute right-2 top-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_1;
