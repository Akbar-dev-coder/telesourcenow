import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlUserFollow } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { IoBagAddOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import ChatBot from "./ChatBot";
const Footer = () => {
  return (
    <div className="footer md:mx-3">
      <div className=" @container mx-auto p-8 px-10 md:pt-20">
        <div className="flex flex-col md:flex-row text-white/80 ">
          <ul className="flex-1/4 w-full">
            <div className="text-2xl font-extrabold py-2"> Company </div>
            <li>
              <Link href="/">Our Packages</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>
            <li>
              <Link href="/">Company</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Social Activities</Link>
            </li>
            <li>
              <Link href="/">Press Page</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <ul className="flex-1/4 w-full">
            <div className="text-2xl font-extrabold py-2">
              Outsourced Services{" "}
            </div>
            <li>
              <Link href="/">Call Center Support Outsourcing</Link>
            </li>
            <li>
              <Link href="/">Technical Support Outsourcing</Link>
            </li>
            <li>
              <Link href="/">Help Desk Support Outsourcing</Link>
            </li>
            <li>
              <Link href="/">Live Chat Support Outsourcing</Link>
            </li>
            <li>
              <Link href="/">eCommerce Customer Support</Link>
            </li>
            <li>
              <Link href="/">Fintech Customer Support</Link>
            </li>
            <li>
              <Link href="/">SaaS Customer Support</Link>
            </li>
            <li>
              <Link href="/">View All Services</Link>
            </li>
          </ul>
          <ul className="flex-1/4 w-full">
            <div className="text-2xl font-extrabold py-2">
              Information Security
            </div>
            <li>
              <Link href="/">{"SupportYourApp's"} Security</Link>
            </li>
            <li>
              <Link href="/">Privacy and Cookie Policy</Link>
            </li>
            <li>
              <Link href="/">Sub Processor List</Link>
            </li>
            <li>
              <Link href="/">Terms of Use</Link>
            </li>
            <li>
              <Link href="/">Data Privacy Framework Notice</Link>
            </li>
          </ul>
          <div className="flex-1/4 w-full mt-3">
            <p className="py-2.5 text-[14px]">
              Helping modern startups scale faster by outsourcing customer
              support.
            </p>
            <div>
              <Image
                src="/Exсellence_2024_Black.svg"
                width={100}
                height={100}
                alt="excellence"
              />
            </div>
            <p className="py-2 text-[14px]">
              Excellence in Customer Service Award as an Outsource Partner of
              the 2024.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-white/80 py-8">
          <div className="flex-1/4 w-full">
            <div className="flex  items-center text-2xl font-bold ">
              <span className="me-2"> Follow us </span>
              <SlUserFollow />
            </div>
            <div className="flex py-5">
              <Link
                href="https://www.facebook.com/supportyourapp/"
                target="_blank"
              >
                <FaFacebookF className="me-5 text-xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/supportyourapp/"
                target="_blank"
              ></Link>
              <FaLinkedinIn className="me-5 text-xl" />
              <Link
                href="https://www.instagram.com/supportyourapp/"
                target="_blank"
              >
                <FaInstagram className="text-xl" />
              </Link>
            </div>
            <div className="flex">
              <Link
                href="https://www.twitter.com/supportyourapp/"
                target="_blank"
              >
                {" "}
                <FaXTwitter className="text-xl me-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@supportyourapp"
                target="_blank"
              >
                <FaYoutube className="text-xl me-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@supportyourapp"
                target="_blank"
              >
                {" "}
                <FaTiktok className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="flex-1/4 w-full">
            <div className="flex items-center text-2xl font-bold">
              <span className="me-2">Send your CV</span>
              <VscSend />
            </div>
            <div className="py-5">
              <Link href="mailto:cv@supportyourapp.com" className="underline ">
                cv@supportyourapp.com
              </Link>
            </div>
          </div>
          <div className="flex-1/4 w-full">
            <div className="flex items-center text-2xl font-bold">
              <span className="me-2">Become our Client</span>
              <IoBagAddOutline />
            </div>
            <div className="py-5">
              <Link href="mailto:hi@supportyourapp.com" className="underline">
                hi@supportyourapp.com
              </Link>
              <div className="pt-3">
                <Link href="tel:1.888.959.3556" className="underline">
                  1.888.959.3556
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1/4 w-full">
            <div className="flex items-center text-2xl font-bold">
              <span className="me-2">Location</span>
              <TfiLocationPin />
            </div>
            <div className="py-5 text-[14px]">
              <p>Delaware Office:</p>
              <p>221 W 10th Street,</p>
              <p>4th Floor, Suite 122,</p>
              <p>Wilmington, DE 19801, USA.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="text-white/50">
            © 2010-2025 SupportYourApp, Inc. SupportYourApp Limited. All rights
            reserved. SUPPORTYOURAPP®, QCRM™, QUIDGET™ are registered trademarks
            in the US and other countries.
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default Footer;
