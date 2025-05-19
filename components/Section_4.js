import React from "react";

const Section_4 = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex gap-2 flex-wrap md:m-3 mt-2">
        <div className=" flex-1 w-full md:w-1/2 bg-purple-200 ">
          <div className="text-center p-10">
            <h1 className="text-7xl font-bold"> 30 </h1>
            <h2 className="text-4xl font-bold pt-5"> Countries </h2>
            <p className="pt-5"> Clients all over the world </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex-1 bg-amber-500">
          <div className="text-center p-10">
            <h1 className="text-7xl font-bold"> 60+ </h1>
            <h2 className="text-4xl font-bold pt-5"> Languages </h2>
            <p className="pt-5"> We speak our customers language </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
