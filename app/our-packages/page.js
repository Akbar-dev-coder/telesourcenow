import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  const steps = [
    {
      time: "If we start today...",
      label: "Sign up",
      color: "from-yellow-300 to-yellow-400",
    },
    {
      time: "in 1–2 days",
      label: "Kickoff meeting",
      color: "from-orange-300 to-orange-400",
    },
    {
      time: "in 14–21 days",
      label: "Meet candidates",
      color: "from-pink-300 to-pink-400",
    },
    {
      time: "1–2 weeks",
      label: "Training",
      color: "from-pink-400 to-pink-500",
    },
    {
      time: "in 30 days",
      label: "Launch",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const headers = [
    "Team Size",
    "Complexity",
    "Languages",
    "Coverage",
    "Multichannel Support",
    "Talent Acquisition",
    "Integration Plan",
  ];

  const plans = [
    {
      size: "0.5-4 talents",
      complexity: "L1",
      languages: "Limited",
      coverage: "Up to 16/7",
      multichannel: "✔️",
      acquisition: "Shared hiring team",
      integration: (
        <>
          <span>Essential integration* ✔️</span>
        </>
      ),
    },
    {
      size: "5-19 talents",
      complexity: "L1, L2, L3",
      languages: "60+",
      coverage: "Any",
      multichannel: "✔️",
      acquisition: "Shared hiring team",
      integration: (
        <>
          <div>Essential integration* ✔️</div>
          <div>Standard integration* ➕</div>
        </>
      ),
    },
    {
      size: "20-99 talents",
      complexity: "L1, L2, L3",
      languages: "60+",
      coverage: "Any",
      multichannel: "✔️",
      acquisition: "Dedicated hiring team",
      integration: (
        <>
          <div>Essential integration* ✔️</div>
          <div>Standard integration* ➕</div>
        </>
      ),
    },
    {
      size: "100+ talents",
      complexity: "Tailored to your needs",
      languages: "Tailored to your needs",
      coverage: "Tailored to your needs",
      multichannel: "Tailored to your needs",
      acquisition: "Tailored to your needs",
      integration: "Tailored to your needs",
    },
  ];
  return (
    <>
      <div className="bg-[#EEECED] m-4 text-center ">
        <div className="max-w-[800px] mx-auto py-10 space-y-5">
          <h1 className="sm:text-6xl text-3xl font-bold">Request Pricing</h1>
          <h2 className="sm:text-6xl text-3xl">of Your Support Solution</h2>
          <p className="sm:text-3xl text-gray-600">
            Create a tailored support team with SupportYourApp. {"We're"} here
            to back you up every step of the way.
          </p>
          <Button>
            <Link href="/">Get A Quote</Link>
          </Button>
        </div>
      </div>
      {/* pricing section */}
      {/* desktop version */}
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <div className="grid sm:grid-cols-5 gap-1">
            <div className="hidden sm:block bg-[#EDECED] space-y-2 px-2.5 py-16">
              <ul className="space-y-2">
                <li className="flex">
                  <Image
                    src="/black-checkmark.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="me-2"
                  />
                  Included
                </li>
                <li className="flex">
                  <Image
                    src="/plus.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="me-2"
                  />
                  Add-on available
                </li>
                <li className="flex items-center">
                  <Image
                    src="/star.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="me-2"
                  />
                  Option may be chosen among solutions
                </li>
              </ul>
            </div>
            <div className="bg-[#EEECED] px-2.5 py-5">
              <div className="text-2xl py-2.5 font-bold">Essential</div>
              <p>
                For businesses with a <b> limited cutomer base </b> in need of a
                personalized approach
              </p>
              <Button className={"mt-24 w-full"}>
                <Link href="/">Get A Quote </Link>
              </Button>
            </div>
            <div className="bg-[#F7EECD] px-2.5 py-5 relative">
              <p className="bg-[#A1F9F6] absolute top-[-0px] px-2.5 py-1 ">
                {" "}
                Most popular{" "}
              </p>
              <div className="text-2xl py-2.5 font-bold">Growth</div>
              <p>
                For businesses with a growing customer base that require a
                diverse set of expertise and additional supervision at all
                stages of setup
              </p>
              <Button className={"mt-12 w-full"}>
                <Link href="/">Get A Quote </Link>
              </Button>
            </div>
            <div className="bg-[#EEECED] px-2.5 py-5">
              <div className="text-2xl py-2.5 font-bold">Advance </div>
              <p>
                For businesses with a <b> Substantial customer base, </b>{" "}
                complex support needs and high inquiry volume
              </p>
              <Button className={"mt-18 w-full"}>
                <Link href="/">Get A Quote </Link>
              </Button>
            </div>
            <div className="bg-[#EEECED] px-2.5 py-5">
              <div className="text-2xl py-2.5 font-bold">Enterprise</div>
              <p>
                For businesses with require a <b> custom support ecosystem </b>{" "}
                to handle a diverse range of customer interactions.
              </p>
              <Button className={"mt-18 w-full"}>
                <Link href="/">Get A Quote </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto max-w-7xl mx-auto px-4">
        <table className="min-w-full table-auto border border-gray-200">
          <tbody>
            {headers.map((header, i) => (
              <tr key={i}>
                <td className="p-2 border font-medium bg-gray-50">{header}</td>
                {plans.map((plan, j) => (
                  <td key={j} className="p-2 border align-top">
                    {Object.values(plan)[i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-5xl font-bold py-10 text-center">Launch Process</div>
      <div className="p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold mb-2">{step.time}</div>
              <div
                className={`rounded-tr-[20px] rounded-br-[20px] bg-gradient-to-r ${step.color} h-6 sm:h-4`}
              ></div>
              <div className="mt-2 text-base font-medium">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="m-3 bg-[#EEECED]">
        <Marquee direction="right" speed={100}>
          <div className="flex items-center justify-center space-x-20 py-10">
            <Image src="/1.svg" width={150} height={100} alt="1" />
            <Image src="/2.svg" width={150} height={100} alt="2" />
            <Image src="/3.svg" width={150} height={100} alt="3" />
            <Image src="/4.svg" width={150} height={100} alt="4" />
            <Image src="/5.svg" width={150} height={100} alt="5" />
            <Image src="/6.svg" width={150} height={100} alt="6" />
            <Image src="/7.svg" width={150} height={100} alt="7" />
            <Image src="/8.svg" width={150} height={100} alt="8" />
            <Image src="/9.svg" width={150} height={100} alt="9" />
            <Image src="/10.svg" width={150} height={100} alt="10" />
            <Image src="/11.svg" width={150} height={100} alt="11" />
            <Image src="/12.svg" width={150} height={100} alt="12" />
            <Image src="/13.svg" width={150} height={100} alt="13" />
            <Image src="/15.svg" width={150} height={100} alt="15" />
            <Image src="/16.svg" width={150} height={100} alt="16" />
            <Image src="/17.svg" width={150} height={100} alt="17" />
            <Image src="/18.svg" width={150} height={100} alt="18" />
          </div>
        </Marquee>
      </div>
      <div className="spt m-3 ">
        <div className="max-w-[1000px] mx-auto py-24 space-y-10">
          <h1 className="sm:text-5xl text-2xl font-bold text-center">
            Actually, ▲82% of Inc.500 companies <br />
            outsource support
          </h1>
          <Button className="text-center mx-auto block">
            <Link href="/"> Get A Quote </Link>
          </Button>
        </div>
      </div>
      <div className="m-3 bg-[#EEECED]">
        <h1 className="text-4xl font-bold p-10 border-b-2 "> FAQs </h1>
        <Accordion type="single" collapsible className={"px-10 w-full"}>
          <AccordionItem value="item-1">
            <AccordionTrigger className={"font-bold text-2xl "}>
              What support solution suits my business best?
            </AccordionTrigger>
            <AccordionContent className={"text-lg"}>
              Considering the right fit for your needs? Evaluate key aspects
              like company size, work scope, tools, and process maturity.
              Consult with our experts to discover the most effective
              SupportYourApp solutions tailored for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={"font-bold text-2xl"}>
              What if I plan to add more options in the future?
            </AccordionTrigger>
            <AccordionContent className={"text-lg"}>
              Explore a wide range of Add-ons and upgrade anytime to fit your
              evolving needs. Our flexible solutions can be customized to match
              your specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={"font-bold text-2xl"}>
              How do you ensure the security and confidentiality of customer
              data?
            </AccordionTrigger>
            <AccordionContent className={"text-lg"}>
              Data is a valuable asset of every business, so we take
              organizational, physical, and logical measures to ensure privacy
              and security of customer data. SupportYourApp is ISO/IEC
              27001:2013 certified and PCI DSS Level 1 Service Provider, HIPAA,
              CCPA, and GDPR-compliant. We are fully equipped to process data of
              various confidentiality levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className={"font-bold text-2xl"}>
              Where will my team be located?
            </AccordionTrigger>
            <AccordionContent className={"text-lg"}>
              It is up to you. Your project’s support team can work from
              multiple locations or from one — whatever suits you best.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className={"font-bold text-2xl"}>
              To what extent will I be involved in my team’s launch and
              management?
            </AccordionTrigger>
            <AccordionContent className={"text-lg"}>
              We can either involve you into any process at any stage and work
              together, or we can take care of everything, and you can focus on
              other areas of your business — the decision is up to you. Either
              way, we offer a team of professionals who can handle your project
              from the very start.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default page;
