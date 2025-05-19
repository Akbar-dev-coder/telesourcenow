import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Section_7 = () => {
  return (
    <div className="@container md:m-3">
      <div className="flex flex-col md:flex-row md:gap-2 flex-wrap ">
        <div className="md:flex-1/6 relative p-[39px] bg-yellow-100">
          <h1 className="text-7xl font-bold"> FAQ </h1>
          <div className="md:pt-110">
            <p className="text-xl font-bold py-2.5 ">
              To get the fastest answer for any question simply contact us and
              ask anything.
            </p>
            <Button>
              <Link href="/">Ask Us A Question</Link>{" "}
            </Button>
          </div>
        </div>
        <div className="md:flex-1/2 ">
          <div className="flex bg-yellow-100 border-b-3 border-white ">
            <div className="p-[39px]">
              <div className="heading-1 text-xl font-bold ">
                What is customer support?
              </div>
              <p className="content-1 py-3">
                Customer support is a range of services aimed at providing the
                customers with assistance and answers when it comes to
                purchasing and using the product.
              </p>
            </div>
            <div className="p-[39px]">
              <div className="heading-1 text-xl font-bold">
                How to outsource customer service?
              </div>
              <p className="content-1 py-3">
                To outsource your customer support service, contact us at
                <Link href="/" className="text-blue-700 underline">
                  {" "}
                  hi@supportyourapp.com,{" "}
                </Link>
                and we will answer all the questions and provide you the help
                you need.
              </p>
            </div>
          </div>
          <div className="flex bg-yellow-100 border-b-3 border-white">
            <div className="p-[39px]">
              <div className="heading-1 text-xl font-bold ">
                Why do companies outsource customer service?
              </div>
              <p className="content-1 py-3">
                Outsourcing Support service is a great way to gather a team that
                is going to ensure a great user experience and will provide
                top-notch care without you having to set the team up and teach
                them the product. SupportYourApp will do that for you.
              </p>
            </div>
            <div className="p-[39px]">
              <div className="heading-1 text-xl font-bold ">
                How much does it cost to outsource customer service?
              </div>
              <p className="content-1 py-3">
                It all depends on the size of the team, the number of languages,
                your hours of operation and whether you prefer a dedicated or
                shared team of consultants. Click for more{" "}
                <Link href="/" className="text-blue-700 underline">
                  details about pricing.{" "}
                </Link>
              </p>
            </div>
          </div>
          <div className="p-[39px] bg-yellow-100">
            <div className="heading-1 text-xl font-bold ">
              What are the outsourcing customer service benefits?
            </div>
            <p className="content-1 py-3">
              Outsourcing help and business support helps you leave the room for
              developing your brand and reach new heights without having to
              worry about hiring and teaching support consultants. Plus,
              outsourced customer service cost is much lower than building an
              in-house team from scratch.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_7;
