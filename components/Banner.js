import React from "react";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="bg-blue-900 text-white pb-4 xl:h-[500px] ">
      <div className="container flex">
        <div className=" justify-center items-center">
          <h1 className="xl:text-7xl font-bold pt-20 pb-6 ps-5">
            {" "}
            The Next Level Of Communication Platform.{" "}
          </h1>
          <p className="ps-5 pb-6 text-2xl">Empowering Enterprises.</p>
          <Button
            variant="default"
            className=" text-white hover:bg-blue-700 hover:text-white bg-violet-700 hover:border-1 ms-5 "
            size="lg"
          >
            {" "}
            About Us{" "}
          </Button>
        </div>
        {/* <div className="flex-1"></div> */}
      </div>
    </section>
  );
};

export default Banner;
