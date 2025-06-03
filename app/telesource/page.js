import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import JobListings from "@/components/JobListings";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFDD02]">
        <div>
          <Image src="/logo.png" width={300} height={0} alt="logo" />
        </div>
        <h1 className="text-4xl font-bold py-10 text-center">
          Careers at TelesourceNow
        </h1>
        <p className="text-lg text-center max-w-2xl px-4">
          Support-as-a-Service that provides augmented customer & technical
          support for growing startups 🦄 and tech companies around the globe.
        </p>
        <div className="mt-10">
          <a href="#jobs">
            <Button className={"transition"}>View Jobs</Button>
          </a>
        </div>
      </div>
      <div className="text-center py-10 text-4xl  font-bold bg-white">
        This world needs your support.
        <br /> Be a Supporter.
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around py-20 gap-5">
        <div className="text-center text-4xl font-bold">
          <p>13</p>
          <p>YEARS</p>
        </div>
        <div className="text-center text-4xl font-bold">
          <p>30+</p>
          <p>COUNTRIES</p>
        </div>
        <div className="text-center text-4xl font-bold">
          <p>1400+</p>
          <p>PEOPLE</p>
        </div>
        <div className="text-center text-4xl font-bold">
          <p>60+</p>
          <p>LANGUAGES</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 p-10">
        <div className="flex-1/2 flex items-center justify-center">
          <p className="text-xl ">
            SupportYourApp is a global company, striving for diversity and
            inclusion. We welcome people with various backgrounds and
            experiences. Bring your unique personality and thrive with us!
          </p>
        </div>
        <div className="flex-1/2">
          <Image src="/image-1.png" width={600} height={0} alt="image-1" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 p-10">
        <div className="flex-1/2">
          <Image src="/image-2.png" width={600} height={0} alt="image-1" />
        </div>
        <div className="flex-1/2 flex items-center justify-center">
          <p className="text-xl ">
            We are like-spirited people determined to make the world a happier
            place, one satisfied customer at a time. We treat our team like our
            clients surrounding them with an unlimited care, individual approach
            and a wholesome positive experience.
          </p>
        </div>
      </div>
      <div className="text-4xl font-bold  text-center py-10">
        It All Started With Them 💛
      </div>
      <div className="flex flex-col md:flex-row gap-5 p-10">
        <div className="flex-1/2">
          <Image
            src="/female-founder-2023.png"
            width={600}
            height={0}
            alt="female-founder"
          />
        </div>
        <div className="flex-1/2">
          <h1 className="text-2xl font-medium pt-7"> DARIA LESHCHENKO</h1>
          <h3 className="text-xl py-3 font-light">
            <i> CEO and Managing Partner</i>
          </h3>
          <p className="text-xl pt-5">
            Daria is a ‘drive and passion’ that moves SupportYourApp forward.
            Daria’s recognition as an industry influencer proves her expertise.
            Daria was included in the 200 Female Founders list by Inc. She is a
            true inspiration and a leader for the SupportYourApp team.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 p-10">
        <div className="flex-1/2">
          <h1 className="text-2xl font-medium pt-7"> DAN ENGEL</h1>
          <h3 className="text-xl py-3 font-light">
            <i> Advisory Board Member</i>
          </h3>
          <p className="text-xl pt-5">
            You may know Dan as {"FastSpring's"} former CEO & Co-Founder. Before
            co-founding FastSpring (the leading e-commerce payment service for
            Mac software authors), Dan was with Google® where he led online
            consumer acquisition for Google’s multi-billion dollar products
            (AdSense™ & AdWords™).
          </p>
        </div>
        <div className="flex-1/2">
          <Image
            src="/dan-eagle.png"
            width={600}
            height={0}
            alt="female-founder"
          />
        </div>
      </div>
      <div className="text-4xl font-bold text-center py-10">
        We Are All Supporters ✨
      </div>
      <p className="text-xl text-center ">Among us:</p>
      <div
        className="grid md:grid-cols-3 sm:grid-cols-2
      grid-cols-1  p-10"
      >
        <div>
          <Image
            src="/support-img-1.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-2.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-3.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-4.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-5.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-6.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-7.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-8.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
        <div>
          <Image
            src="/support-img-9.png"
            width={500}
            height={0}
            alt="supporter-1"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex lg:gap-20 gap-10 pb-10">
          <li className="">
            <Link
              href="https://www.facebook.com/supportyourapp/"
              target="_blank"
              className="text-xl"
            >
              <FaFacebookF className="text-[#39579A] lg:text-5xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/supportyourapp/"
              target="_blank"
              className="text-2xl"
            >
              <FaSquareXTwitter className="lg:text-5xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/supportyourapp/"
              target="_blank"
              className="text-2xl"
            >
              <FaLinkedin className="text-[#007BB5] lg:text-5xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/supportyourapp/"
              target="_blank"
              className="text-2xl"
            >
              <FaInstagram className="text-[#D4516C] lg:text-5xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@supportyourapp"
              target="_blank"
              className="text-2xl"
            >
              <FaYoutube className="text-red-600 lg:text-5xl" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-4xl font-bold py-10 text-center">
        Our Achievements 🏆
      </div>
      <div className="flex flex-col md:flex-row gap-2.5 p-10">
        <div>
          <Image src="/gold.png" width={500} height={0} alt="achievement-1" />
        </div>
        <div>
          <Image src="/top-50.png" width={500} height={0} alt="achievement-1" />
        </div>
        <div>
          <Image
            src="/clutch-top-3.png"
            width={500}
            height={0}
            alt="achievement-1"
          />
        </div>
      </div>
      <div className="text-4xl font-bold py-10 text-center">
        Team of like-minded peers 🤗
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 p-10">
        <Image src="/p-1.png" width={500} height={0} alt="team-1" />
        <Image src="/p-2.png" width={500} height={0} alt="team-1" />
        <Image src="/p-3.png" width={500} height={0} alt="team-1" />
        <Image src="/p-4.png" width={500} height={0} alt="team-1" />
        <Image src="/p-5.png" width={500} height={0} alt="team-1" />
        <Image src="/p-6.png" width={500} height={0} alt="team-1" />
      </div>
      <div className="lg:text-4xl text-3xl font-bold py-10 text-center">
        Why I love SupportYourApp 😍
      </div>
      <div className="w-max-[800px] mx-auto">
        <div className="text-xl text-center px-10 pb-10">
          My path with SupportYourApp started around 4 years ago. During the
          first interview I understood I had to get the job! From the day one
          the team has shown nothing but support and understanding. Whatever I
          asked for — a different project, convenient schedule, or working
          remotely — the management found ways to make it happen. What’s more,
          here I tried on a new exciting role and started growing
          professionally! A separate perk is the state-of-the-art offices —
          places you wouldn’t want to leave at the end of the day.
        </div>
        <div className="flex justify-center items-center">
          <Image src="/emoji-1.png" width={200} height={0} alt="emoji" />
        </div>
        <p className="text-center py-3 text-xl">Inna</p>
        <div className="text-xl text-center px-10 pt-10 pb-10">
          <p>
            When I started working at SUP, I though it would be just another job
            and that I might be able to find something better soon. I{" "}
            {"couldn't"}
            have been more wrong. The company showed me from the very start how
            different they were from anything else out there, with the friendly
            feel and a very supportive structure in place. On top of that, they
            religiously follow company values they. Whenever I did not know
            something, all I needed to do was ask, and they would train me.
          </p>
          <p>
            When I expressed that I wanted to grow, it was welcomed with opened
            arms. They told me to work hard, to learn, listen, and follow the
            guidelines. And they were 100% correct , as soon the opportunity for
            me to grow showed itself. After almost a year in the company, I am
            looking forward to at least 9 more. I {"don't"} see myself anywhere
            else, as sometimes it can be hard to fit in when it comes to new
            environments, but at SUP different is welcomed and supported.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/emoji-2.png" width={200} height={0} alt="emoji" />
        </div>
        <p className="text-center py-3 text-xl">Milan </p>
        <div className="text-xl text-center px-10 pt-10 pb-10">
          <p>
            SupportYourApp is a dynamic, ever-growing company filled with
            passion to provide excellent service and creating a united, fun and
            supportive working environment. Our team is vibrant, friendly, and
            respectful. The management team is incredibly supportive and will
            always help you. SupportYourApp offers endless opportunities. I feel
            blessed every day.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/emoji-3.png" width={200} height={0} alt="emoji" />
        </div>
        <p className="text-center py-3 text-xl">Michelle </p>
      </div>
      <div className="lg:text-4xl text-3xl font-bold py-10 text-center">
        What we offer 🔥
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2   p-10 bg-[#FBFBFB]">
        <div className="p-10">
          <ul className="list-disc text-xl">
            <li>team of like-minded peers</li>
            <li> flexible schedule </li>
            <li>greenhouse conditions for self-development</li>
            <li>creative and unique art-office</li>
            <li>cooperation with the world-known projects</li>
            <li>mind-blowing corporate events and social activities </li>
            <li>casual cooperative work environment </li>
            <li>responsive management interested in your growth</li>
          </ul>
        </div>
        <div>
          <Image
            src="/chill-man.png"
            width={600}
            height={0}
            alt="offer-image"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="lg:text-4xl text-3xl font-bold py-10 text-center">
        Join us if you want to 🦄
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2   p-10 bg-[#FBFBFB]">
        <div>
          <Image
            src="/fish.png"
            width={600}
            height={0}
            alt="offer-image"
            className="w-full h-auto"
          />
        </div>
        <div className="p-10">
          <ul className="list-disc text-xl">
            <li>team of like-minded peers</li>
            <li> flexible schedule </li>
            <li>greenhouse conditions for self-development</li>
            <li>creative and unique art-office</li>
            <li>cooperation with the world-known projects</li>
            <li>mind-blowing corporate events and social activities </li>
            <li>casual cooperative work environment </li>
            <li>responsive management interested in your growth</li>
          </ul>
        </div>
      </div>
      <div className="lg:text-4xl text-3xl font-bold py-10 text-center">
        Apply now 👇
      </div>
      <div className="bg-[#FBFBFB] p-10" id="jobs">
        <JobListings />
      </div>
    </>
  );
};

export default page;
