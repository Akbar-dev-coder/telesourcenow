import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Section_3 = () => {
  return (
    <div className="@container mx-auto  flex flex-wrap gap-2 md:m-3">
      <div className="md:flex-1/3  bg-purple-200 p-10">
        <h2 className="text-[40px] font-bold ps-6 flex">
          <Image src="/lock-pictogram.svg" width={20} height={40} alt="lock" />{" "}
          Ultimate Security
        </h2>
        <p className="ps-6 pt-4">
          Our clients security is our priority. That is why we are complying
          with all essential security standards.
        </p>
        <Button className=" text-white mt-4 ms-6">
          {" "}
          <Link href="/lernmore">Learn More</Link>{" "}
        </Button>
      </div>
      <div className="flex-1/2">
        <ul className="grid md:grid-cols-2 gap-0.5">
          <li className="flex items-center justify-center bg-purple-200 p-12">
            <Image src="/pci.svg" width={100} height={50} alt="pci" />
          </li>
          <li className="bg-purple-200 flex items-center justify-center p-12">
            <Image src="/gdpa.png" width={100} height={50} alt="pci" />
          </li>
          <li className="bg-purple-200 flex items-center justify-center p-12">
            <Image src="/iso.svg" width={100} height={50} alt="iso" />
          </li>
          <li className="bg-purple-200 flex items-center justify-center p-12">
            <Image src="/ccpa.svg" width={100} height={50} alt="pci" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section_3;
