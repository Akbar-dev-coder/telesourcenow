import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const company = () => {
  return (
    <>
      <div className="@container mx-3 mt-3 md:py-20 bg-purple-200">
        <div className="content-section  md:w-[800px] mx-auto">
          <div className="text-3xl font-bold py-4">Why SupportYourApp?</div>
          <p className="text-xl pb-10">
            Since 2010, SupportYourApp has become an industry leader for premium
            outsourced support services. Our multinational{" "}
            <Link href="/" className="text-blue-700 underline">
              team{" "}
            </Link>
            of incredibly creative and hardworking individuals is carefully
            picked to fit your business needs. Originally founded in Kyiv,
            Ukraine, the heart of Eastern Europe’s booming tech scene,{" "}
            <span className="bg-yellow-400 font-bold">
              SupportYourApp turned global with hubs in many countries around
              the world{" "}
            </span>{" "}
            while keeping focuses on providing professional inbound, outbound,
            and back–office support services specifically for{" "}
            <span className="bg-yellow-400 font-bold">
              innovative tech companies.{" "}
            </span>
          </p>
          <div className="flex flex-col md:flex-row flex-wrap gap-2 p-3 bg-white">
            <div className="flex-1 md:basis-[30%] img1 bg-green-400 flex justify-center items-center py-2.5">
              <Image
                src="/Inc_5000_award.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[39%] bg-sky-500 flex justify-center items-center py-2.5">
              <Image
                src="/Exсellence_2024_Black (1).svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[39%] bg-pink-500 flex justify-center items-center py-2.5">
              <Image
                src="/On_Con_Award_Color.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[30%] bg-yellow-500 flex justify-center items-center py-2.5">
              <Image
                src="/2023_Female_founders_200.png"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[30%]   bg-sky-200 flex justify-center items-center py-2.5">
              <Image
                src="/Badge_CCA_Black.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[39%] bg-pink-600 flex justify-center items-center py-2.5">
              <Image
                src="/globee_sales_marketing_site-2022.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[39%] bg-green-300 flex justify-center items-center py-2.5">
              <Image
                src="/emea-top-50-workplaces.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[30%] bg-yellow-500 flex justify-center items-center py-2.5">
              <Image
                src="/globee_sales_marketing_site-2022.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[30%]  bg-sky-900 flex justify-center items-center py-2.5">
              <Image
                src="/sage21-gold-winner-bw.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[39%]  bg-sky-300 flex justify-center items-center py-2.5">
              <Image
                src="/SAGE22_Bronze_Winner.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-[39%]  bg-pink-600 flex justify-center items-center py-2.5">
              <Image src="/stevie.svg" width={150} height={100} alt="inc" />
            </div>
            <div className="img1 flex-1 md:basis-[30%]  bg-yellow-700 flex justify-center items-center py-2.5">
              <Image
                src="/sage21-silver-winner-bw.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
            <div className="img1 flex-1 md:basis-100 bg-green-700 flex justify-center items-center py-2.5">
              <Image
                src="/clutch-top3.svg"
                width={150}
                height={100}
                alt="inc"
              />
            </div>
          </div>
          <div className="our-section">
            <h2 className="text-3xl font-bold py-3">
              Our Commitment to Quality & Security{" "}
            </h2>
            <p className="text-xl pb-10">
              At SupportYourApp, we are committed to providing tech companies
              with efficient and{" "}
              <span className="bg-yellow-500 underline">
                <Link href="/">reliable outsourced support service</Link>
              </span>{" "}
              . To keep true to this pledge and to focus on providing only the
              highest quality support, we are currently integrating{" "}
              <span className="bg-yellow-500 underline">
                <Link href="/">only TWO clients per month</Link>
              </span>
              . Need a phone number or a{" "}
              <span className="bg-yellow-500 underline">
                {" "}
                <Link href="/">sophisticated CRM</Link>
              </span>{" "}
              system? We can provide both of them upon your request together
              with an{" "}
              <span className="bg-yellow-500 underline">
                <Link href="/">entire support solution package!</Link>
              </span>
            </p>
          </div>
          <div className="bg-white p-2.5 flex-col flex md:flex-row flex-wrap gap-2">
            <div className="flex flex-1 justify-center items-center bg-yellow-300 py-2.5 ">
              <Image src="/pci-dss.svg" width={100} height={150} alt="pci" />
            </div>
            <div className="flex flex-1 justify-center items-center bg-sky-300 py-2.5">
              <Image src="/iso (1).svg" width={150} height={100} alt="iso" />
            </div>
            <div className="flex flex-1 justify-center items-center bg-pink-700 py-2.5">
              <Image src="/gdpr.svg" width={150} height={100} alt="gdpr" />
            </div>
          </div>
          <p className="text-xl py-10 ">
            At SupportYourApp our priority is to provide{" "}
            <span className="bg-pink-500">
              {" "}
              the highest data security for our clients
            </span>{" "}
            . We believe its safety has become a primary concern. We are ISO
            certified. Our team will ensure the security of your and your
            customers’ data in accordance with the certifications’ standards and
            world’s best practices. We have taken all possible security measures
            to prevent any data leaks. Be sure — even the most sensitive
            information is safe with SupportYourApp.
          </p>
          <p className="text-xl font-bold pb-10">
            <span className="font-extrabold "> Think about outsourcing. </span>
            Take into consideration the service options of our outstanding
            outsourced support. Consider our excellent customer support
            outsourcing & custom pricing options:
          </p>
          <div className="">
            <Button>
              <Link href="/" className="flex items-center">
                GET YOUR PERSONALIZED QUOTE NOW
                <FaArrowRightLong className="ms-2" />
              </Link>{" "}
            </Button>
          </div>
          <ul className=" py-10">
            <li className="text-2xl font-bold">
              <Link href="tel:1.888.959.3556">1.888.959.3556</Link>
            </li>
            <li className="text-2xl font-bold text-blue-700 underline">
              <Link href="mailto:hi@supportyourapp.com">
                hi@supportyourapp.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row m-3 gap-2">
        <div className="image w-full flex-1 overflow-hidden">
          <Image
            src="/pic8.jpg"
            width={410}
            height={0}
            alt="img1"
            className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110"
          />
        </div>
        <div className="image flex-1 overflow-hidden">
          <Image
            src="/pic9.jpg"
            width={410}
            height={0}
            alt="img1"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110"
          />
        </div>
        <div className="image flex-1 overflow-hidden">
          <Image
            src="/pic4.jpg"
            width={410}
            height={0}
            alt="img1"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110"
          />
        </div>
      </div>
      <div className="request-setction text-center md:py-10 m-3">
        <div className="flex justify-center items-center text-xl lg:text-4xl font-bold md:pb-20 md:pt-10 py-10">
          We are proud to have{" "}
          <Image
            src="/glovo-logo.svg"
            width={150}
            height={100}
            alt="glove"
            className="mx-2"
          />{" "}
          as our customer{" "}
        </div>
        <div className="pb-10">
          <Button>
            {" "}
            <Link href="/">Request my quote</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default company;
