import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="contact-support-page m-3 bg-purple-200 md:py-20 py-10">
        <div className="max-w-[800px] mx-auto ps-2">
          <div className="md:text-5xl text-2xl font-bold ">
            Contact SupportYourApp
          </div>
          <p className="text-xl py-6">
            We are based across several locations worldwide: main office in the
            US, delivery offices around the world, representative office in Hong
            Kong.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1/2">
              <div className="flex">
                <Image
                  src="/contact_case.svg"
                  width={20}
                  height={0}
                  alt="contact-case"
                />
                <span className="text-xl font-bold ms-2">
                  {" "}
                  For service quote and business
                </span>
              </div>
              <span className="font-bold text-xl">related questions:</span>
              <div className="py-6">
                <Button>
                  <Link href="/"> Send Business Request </Link>
                </Button>
              </div>
              <ul>
                <li className="text-xl font-bold">
                  <span className="text-gray-400 text-xl font-normal me-2">
                    OR
                  </span>
                  give us a call to — <br />
                  <Link
                    href="telto:1.888.959.3556"
                    className="text-blue-800 underline font-normal"
                  >
                    1.888.959.3556
                  </Link>
                </li>
                <li className="text-xl font-bold">
                  <span className="text-gray-400 text-xl font-normal me-1">
                    OR
                  </span>{" "}
                  send us an email — <br />
                  <Link
                    href="mailto:hi@supportyourapp.com"
                    className="text-blue-800 underline font-normal"
                  >
                    hi@supportyourapp.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1/2">
              <div className="flex">
                <Image
                  src="/contact_user.svg"
                  width={20}
                  height={0}
                  alt="contact-user"
                />
                <span className="text-xl font-bold ms-2">
                  For job applications:
                </span>
              </div>
              <div className="pb-6 pt-13">
                <Button>
                  <Link href="/"> Visit Our Career Page </Link>
                </Button>
              </div>
              <ul>
                <li className="text-xl font-bold">
                  <span className="text-gray-400 text-xl font-normal me-2">
                    OR
                  </span>{" "}
                  send us an email — <br />
                  <Link
                    href="mailto:cv@supportyourapp.com"
                    className="text-blue-800 underline font-normal"
                  >
                    cv@supportyourapp.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col md:flex-row gap-3 ">
        <div className="flex-1/3 bg-purple-200"></div>
        <div className="flex-1/2 bg-purple-200">
          <div className="p-18">
            <ul className="text-xl">
              <li className="font-bold">SupportYourApp Inc,</li>
              <li className="text-gray-500">221 W 10th Street,</li>
              <li className="text-gray-500">4th Floor, Suite 122,</li>
              <li className="text-gray-500">Wilmington, DE 19801, USA.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mot-page md:py-20 py-14 m-3">
        <div className="max-w-[600px] mx-auto">
          <div className="md:text-4xl text-center font-bold">
            Our strongest asset is PEOPLE <br />
            <span>(1200+ of them actually)</span>
          </div>
          <div className="text-center pt-10">
            <Button>
              <Link href="/our-team">MEET OUR TEAM </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
