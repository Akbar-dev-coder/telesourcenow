import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
const Section_2 = () => {
  return (
    <div className="@container mx-auto">
      <div className="flex gap-2 flex-col flex-wrap md:flex-row md:m-3">
        <div className="md:flex-1/2 flex-1 ">
          <div className="flex ">
            <ul className="grid md:grid-cols-3 grid-cols-2 gap-0.5 flex-1">
              <li className="bg-purple-200 p-15">
                <div className="text-center">
                  <p className="pb-2"> Call Center Outsourcing </p>
                  <Button>
                    <Link href="/">Learn More</Link>
                  </Button>
                </div>
              </li>
              <li className=" bg-purple-200 p-15">
                <div className="text-center">
                  <p className="pb-2">Live Chat Support Outsourcing </p>
                  <Button>
                    <Link href="/">Learn More</Link>
                  </Button>
                </div>
              </li>
              <li className=" bg-purple-200 p-15">
                <div className="text-center">
                  <p className="pb-2"> eCommerce Support </p>
                  <Button>
                    <Link href="/">Learn More</Link>
                  </Button>
                </div>
              </li>
              <li className=" bg-purple-200 p-15">
                <div className="text-center">
                  <p className="pb-2"> Social Media Customer Service </p>
                  <Button>
                    <Link href="/">Learn More</Link>
                  </Button>
                </div>
              </li>
              <li className=" bg-purple-200 p-15">
                <div className="text-center">
                  <p className="pb-2"> Telephone Answering Services </p>
                  <Button>
                    <Link href="/">Learn More</Link>
                  </Button>
                </div>
              </li>
              <li className=" bg-purple-200 p-15">
                <div className="text-center">
                  <p className="pb-2"> Help Desk Outsourcing</p>
                  <Button>
                    <Link href="/">Learn More</Link>
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex-1/4 flex-1 bg-amber-400 p-[48px]">
          <h2 className="text-[40px] font-bold">Omnichannel</h2>
          <p className="text-[18px] leading-7 mt-4 pb-4">
            We cover all ways and channels of communication with your customers.{" "}
          </p>
          <Button>
            {" "}
            <Link href="/">Check All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
