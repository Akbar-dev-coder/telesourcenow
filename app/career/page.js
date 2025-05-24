import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="m-3 bg-yellow-400 py-14">
        <div className="text-center">
          <h1 className="font-bold md:text-5xl text-3xl">Join Our Team</h1>
          <div className="py-8 text-xl font-bold">
            This world needs your support. Be a Supporter.
          </div>
          <div className="text-center pt-3">
            <Button>
              <Link href="/">Check Our Vacancies</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="m-3 overflow-hidden career-content ">
        <div className="career-video cursor-pointer flex justify-center items-center transition delay-150 duration-300 ease-in-out  hover:scale-110 ">
          <div className="play-video-btn transition delay-150 duration-300 ease-in-out">
            Who Are the Supporters ( in 90 sec )
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row gap-2.5 m-3">
        <div className="md:flex-1/6 overflow-hidden">
          <div className="flex w-full h-full transition delay-150 duration-300 ease-in-out  hover:scale-110 ">
            <Image src="/kseniia_s.jpg" width={600} height={0} alt="ksenia" />
          </div>
        </div>
        <div className="md:flex-1/2 bg-[#EDECED] ">
          <div className="md:p-20 p-10">
            <div className="text-3xl font-bold">Hi! {"I'm Kseniya"}</div>
            <p className="py-7">
              I love finding talented Supporters for the fast-growing IT
              companies in the world. Maybe {"I'm"} looking for you right now?
            </p>
            <p>
              Do you speak English, French, German, Spanish or any other
              language like a native{" "}
              <span className="bg-yellow-300">
                {" "}
                speaker and want to <b>work with the world’s </b>{" "}
              </span>
              <b> most dynamic IT companies?</b> Do you have doubts because you
              have no formal IT or programming training?{" "}
              <span className="bg-yellow-300">
                {" "}
                Doubt no further. You can <b>start your career as </b>
              </span>{" "}
              <b> a Customer Care Consultant </b> for the world’s most
              successful and ambitious tech companies and startups like MacPaw,
              Calm, Glovo, and many others.
            </p>
            <p className="py-7">
              We have{" "}
              <b>
                {" "}
                27 open positions in Argentina, Brazil, Morocco, Serbia,
                Ukraine, etc.
              </b>{" "}
              →
            </p>
            <div>
              <Button>
                <Link href="/"> Join Us! </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col md:flex-row gap-2.5">
        <div className="flex-1/2 bg-[#EDECED] md:py-36 px-14 font-bold py-24">
          <div className="text-4xl"> Who We Are?</div>
        </div>
        <div className="text-white/70 flex-1/2 bg-[#F3849B] md:py-20 py-14 px-14 ">
          <div className="text-4xl font-bold">14 years</div>
          <p className="pt-5">
            SupportYourApp is a Support-as-a-Service (SaaS) company that has
            been providing secure customer support for growing companies since
            2010. We work with a wide range of industries, including SaaS,
            fintech, apps, platforms, software, hardware, crypto, and more.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2.5 m-3">
        <div className="p-10 bg-[#3582BA] text-white">
          <div className="text-4xl font-bold "> 30+ countries</div>
          <p className="pt-5 ">
            Originally founded in the heart of the Eastern European booming tech
            scene, SupportYourApp turned global with hubs in many countries
            around the world. We grow consistently and always keep our focus on
            providing professional inbound, outbound, and back–office customer
            support specifically for innovative software and hardware companies.
          </p>
        </div>
        <div className="p-10 bg-[#75CBD4] text-white">
          <div className="text-4xl font-bold "> 60+ languagess</div>
          <p className="pt-5 ">
            We speak the language of our clients’ customers. And since they live
            all over the world, we know a lot of languages. So your linguistic
            skills will definitely come in handy.for innovative software and
            hardware companies.
          </p>
        </div>
        <div className="p-10 bg-[#FFDE00]">
          <div className="text-4xl font-bold text-black"> 1200+ people</div>
          <p className="pt-5 ">
            SupportYourApp is a large international company, where everyone can
            find their place. Although our consultants work in different parts
            of the world, everyone feels valued and has the opportunity to
            develop and grow professionally.
          </p>
        </div>
      </div>
      {/* <div className="carousel"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 m-3">
        <div className="w-full h-full">
          <Image src="/award-1.jpg" width={500} height={0} alt="award-1" />
        </div>
        <div className="w-full h-full">
          <Image src="/award-2.jpg" width={500} height={0} alt="award-1" />
        </div>
        <div className="w-full h-full">
          <Image src="/award-3.jpg" width={500} height={0} alt="award-1" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-2.5 m-3">
        <div className="flex-1/2 md:flex-1/2 bg-[#EDECED]">
          <div className="py-14 px-10">
            <div className="text-4xl font-bold pb-10">How We Work?</div>
            <p className=" font-medium">
              SupportYourApp is a global company, striving for diversity and
              inclusion. We welcome people with various backgrounds and
              experiences. Bring your unique personality and thrive with us.
            </p>
            <p className="py-5 font-medium">
              We are a team of like-spirited people determined to help others,
              one satisfied customer at a time.
            </p>
            <p className="font-medium">
              We treat our team like our clients, surrounding them with
              unlimited care, individual approach, and a wholesome positive
              experience.
            </p>
          </div>
        </div>
        <div className="flex-1/2 md:flex-1/4 ">
          <div className="w-fit h-full flex">
            <Image
              src="/how-work-img.jpg"
              width={600}
              height={0}
              alt="howwork"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#B34264] m-3 pb-10">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="md:py-14 py-5 px-12 text-white">
            <h1 className="text-4xl font-bold"> How We Care?</h1>
            <p className="font-bold py-2">
              We are all about support. {"That's"} our profession, our hobby,
              and our lifestyle.
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <Button>
              <Link href="/social-responsibility">
                Read more about our social responsibility
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="slider"></div> */}
      <div className="flex flex-col md:flex-row gap-2.5 m-3">
        <div className="flex-1/2">
          <div className="bg-[#75CBD4] p-20 font-bold text-5xl text-white">
            What You’ll Get?
          </div>
          <ul className=" w-full">
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-1.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">
                the opportunity and time to grow professionally
              </span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-2.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">team of like-minded peers</span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-3.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">
                flexible schedule and freedom to work from anywhere
              </span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-4.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">
                greenhouse conditions for self-development
              </span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-5.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">creative and unique art-offices</span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-6.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">cooperation with global projects</span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-7.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">
                mind-blowing corporate events and social activities
              </span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-8.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">
                casual and cooperative work environment
              </span>
            </li>
            <li className="flex pl-10 h-[66px] items-center font-medium text-xl bg-[#DCF4F6] hover:bg-[#C0F1F6] mt-1.5">
              <Image
                src="/item-icon-9.svg"
                width={30}
                height={0}
                alt="icon-1"
              />
              <span className="pl-4">
                responsive management interested in your growth
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-1/2">
          <Image src="/chill-man.png" width={600} height={0} alt="chill" />
        </div>
      </div>
    </>
  );
};

export default page;
