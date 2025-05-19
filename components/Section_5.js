import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Section_5 = () => {
  return (
    <div className="@container md:mx-3 md:mb-2">
      <div className="section-5 p-10 ">
        <div>
          <Image
            src="/2023_Female_founders_200.png"
            width={200}
            height={100}
            alt="2018"
          />
        </div>
        <div className="pt-4 text-white xl:w-100 pb-8 text-xl">
          {" "}
          Hi! I m Daria, CEO and Managing Partner at SupportYourApp, a
          Support-as-a-Service company that has been providing secure customer
          and technical support services since 2010.
        </div>
        <Button>
          <Link href="/"> READ COMPANY STORY </Link>
        </Button>
      </div>
    </div>
  );
};

export default Section_5;
