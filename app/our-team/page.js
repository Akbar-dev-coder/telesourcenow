import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" m-3 overflow-hidden cursor-pointer">
        <div className="video-container transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110 flex flex-wrap justify-center items-center flex-col">
          <div className="video-image pb-5">
            <Image
              src="/play-icon-red.svg"
              width={110}
              height={0}
              alt="video-play"
            />
          </div>
          <div className="text-white  text-center">
            <span className="text-4xl font-bold">
              {" "}
              Who We Are <br />
            </span>
            <span className="text-xl">(in 90 sec)</span>
          </div>
        </div>
      </div>
      <div className="team-info-title text-xl font-bold flex justify-center items-center mx-3 py-5 md:py-7">
        It All Started With Them
      </div>
      <div className="flex flex-col md:flex-row gap-2 m-3">
        <div className="flex flex-1/12 overflow-hidden">
          <Image
            src="/leshchenko.jpg"
            width={400}
            height={0}
            alt="daria"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110"
          />
        </div>
        <div className="flex-1/2 bg-purple-200 md:py-8 py-5">
          <div className="md:text-[40px] text-[30px] font-bold pt-5 ms-4">
            Daria Leshchenko
          </div>
          <div className="md:text-[40px] text-[30px] pb-5 ms-4">
            CEO and Managing Partner
          </div>
          <p className="text-xl ms-4">
            Daria is a ‘drive and passion’ that moves SupportYourApp forward.
            Her recognition as an industry influencer proves her expertise.
            Daria was included in the 200 Female Founders list by Inc. She is a
            true inspiration and a leader for the SupportYourApp team.
          </p>
          <div className="flex flex-wrap items-center gap-6 justify-center py-3">
            <div className="">
              <Image
                src="/female-founders-awards (1).svg"
                width={164}
                height={0}
                alt="female founder award"
              />
            </div>
            <div>
              <Image
                src="/daria-globee-gold-2022.png"
                width={96}
                height={0}
                alt="female founder award"
              />
            </div>
            <div>
              <Image
                src="/Harvard-Kennedy-School.svg"
                width={300}
                height={0}
                alt="female founder award"
              />
            </div>
            <div>
              <Image
                src="/Badge_CCA_white.svg"
                width={110}
                height={0}
                alt="female founder award"
              />
            </div>
          </div>
          <div className="ms-4 my-9">
            <Button>
              {" "}
              <Link href="https://linkedin.com/in/darialeshchenko/">
                LINKEDIN
              </Link>
            </Button>{" "}
            <Button>
              {" "}
              <Link href="https://twitter.com/darialeschenko/">
                @DariaLeschenko
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-2 m-3">
        <div className="flex-1/2 md:flex-1/2 bg-purple-200 md:py-8 py-5">
          <div className="md:text-end me-4 md:text-[40px] text-[30px] font-bold pt-5  ">
            Dan Engel
          </div>
          <div className=" md:text-end me-4 md:text-[40px] text-[30px] pb-5 ">
            Advisory Board Member
          </div>
          <p className="text-xl ">
            You may know Dan as {"FastSpring's"} former CEO & Co-Founder. Before
            co-founding FastSpring (the leading e-commerce payment service for
            Mac software authors), Dan was with Google® where he led online
            consumer acquisition for Google’s multi-billion dollar products
            (AdSense™ & AdWords™). FastSpring built a great reputation for its
            outstanding in-house order support team, but when it comes to
            outsourced product support, that’s where SupportYourApp comes in.
          </p>
          <div className="md:text-end ms-4 me-4 my-9">
            <Button>
              {" "}
              <Link href="https://linkedin.com/in/danengel1/">LINKEDIN</Link>
            </Button>{" "}
          </div>
        </div>
        <div className="flex1/2 flex md:flex-1/12 overflow-hidden">
          <Image
            src="/dan-engel.jpg"
            width={400}
            height={0}
            alt="dan-egle"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-0 hover:scale-110"
          />
        </div>
      </div>
      <div className="support-title flex justify-center items-center py-10 lg:text-[80px] md:text-[60px] sm:text-[40px] text-[25px] font-bold m-3">
        We Are All Supporters
      </div>
      <div className="m-3 flex flex-col gap-2.5 md:flex-row">
        <div className="flex-1/2">
          <div className="flex items-end team-support-title relative ">
            <div className="text-white font-bold text-2xl ms-8 pb-8 ">
              Oleksandr
            </div>
          </div>
        </div>
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Hyeyun </h2>
            <h4 className="text-2xl "> Customer Support Consultant </h4>
            <p className="py-5">
              Hyeyun is a professional multitasker, being a Customer Support
              Consultant, and a Quality Assurance Specialist at the same time.
            </p>
            <p>
              Hyeyun is a professional multitasker, being a Customer Support
              Consultant, and a Quality Assurance Specialist at the same time.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image src="/hyeyun.png" width={400} height={0} alt="hayun" />
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col gap-2.5 md:flex-row">
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Anna </h2>
            <h4 className="text-2xl "> Human Resources </h4>
            <p className="py-5">
              Anna searches for new talents to join SupportYourApp and helps our
              Head of HR with team management. She is a true communication
              master — no tense situations happen when she’s around.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image src="/Anna_2.png" width={400} height={0} alt="Anna" />
          </div>
        </div>
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Sylvester </h2>
            <h4 className="text-2xl "> Customer Support Consultant </h4>
            <p className="py-5">
              For Sylvester customer support is a never-ending adventure. He’s
              not afraid of unscripted situations, and always manages to find
              creative and unique ways to solve customers’ requests.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image
              src="/sylvester.png"
              width={400}
              height={0}
              alt="sylvester"
            />
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col gap-2.5 md:flex-row">
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Roman </h2>
            <h4 className="text-2xl "> Chief Growth Officer </h4>
            <p className="py-5">
              If we had to name SupportYourApp’s greatest promoter, Roman would
              be a mile ahead of the competition, due to his unending energy and
              enthusiasm. His responsibilities include bringing new clients and
              laying a sturdy foundation for strong relationships.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image
              src="/roman-bednarchyk.png"
              width={400}
              height={0}
              alt="roman"
            />
          </div>
        </div>
        <div className="flex-1/2">
          <div className="team-info  bg-yellow-500 py-20 px-16">
            <div className="md:text-[120px] font-bold text-[60px] p-0 m-0">
              1200+
            </div>
            <div className=" font-bold md:text-[40px] text-3xl p-0 m-0">
              Super-Talents
            </div>
            <div className=" py-3">
              <Button>
                <Link href="https://apply.workable.com/supportyourapp/">
                  I Want To Join{" "}
                </Link>
              </Button>
            </div>
            <p>
              We are always hiring :) If you feel that our culture and values
              inspire you, apply to become a part of our team now. Who knows –
              we may be a perfect fit!
            </p>
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col gap-2.5 md:flex-row">
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Olha </h2>
            <h4 className="text-2xl "> Learning Specialist </h4>
            <p className="py-5">
              Olha makes a learning process a game-changer! The moment she steps
              in, knowledge flows, and consultants sharpen their skills to
              deliver outstanding support.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image src="/olha.png" width={400} height={0} alt="Anna" />
          </div>
        </div>
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Amiel </h2>
            <h4 className="text-2xl "> Customer Support Consultant </h4>
            <p className="py-5">
              Amiel will never limit himself with basic requirements, he is
              always ready to go an extra mile to make our clients happy.
            </p>
            <p>
              Every day he shows us an example of how a passion for tech and
              communication skills work together to result in high-quality
              support.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image
              src="/amiel_afurong.png"
              width={400}
              height={0}
              alt="sylvester"
            />
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col gap-2.5 md:flex-row">
        <div className="flex-1/2">
          <div className="flex items-end team-support-title2 relative ">
            <div className="text-white font-bold text-2xl ms-8 pb-8 ">
              Felix
            </div>
          </div>
        </div>
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Vincent </h2>
            <h4 className="text-2xl "> Service Delivery Manager </h4>
            <p className="py-5">
              Vincent is an impersonation of what a passion about one’s job is.
              He is responsible for communication between our clients and
              consultants, and consistently manages to make both sides happy.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image
              src="/vincent-columbro.png"
              width={400}
              height={0}
              alt="vincent"
            />
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-col gap-2.5 md:flex-row">
        <div className="flex-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className=" flex-1/2 team-person-info bg-purple-200 md:py-20 py-5 px-5">
            <h2 className="text-3xl font-bold"> Nick </h2>
            <h4 className="text-2xl "> Chief Integration </h4>
            <p className="py-5">
              Nick ensures seamless integration and a successful launch for each
              of our new projects.
            </p>
            <p>
              As soon as Nick inhales a challenge, he doesn’t exhale until the
              solution is found.
            </p>
          </div>
          <div className="flex flex-1/2 team-person-photo">
            <Image
              src="/team-nick-ryabchenko.png"
              width={400}
              height={0}
              alt="hayun"
            />
          </div>
        </div>
        <div className="flex-1/2">
          <div className="flex items-end team-support-title3 relative ">
            <div className="text-white font-bold text-2xl ms-8 pb-8 ">
              Polina, Valeriia and Ruvim
            </div>
          </div>
        </div>
      </div>
      <div className="instance_section m-3 py-20">
        <div className="flex justify-center items-center md:text-5xl font-bold pb-5">
          <span>For instance</span>
          <Image
            src="/mastercard-logo.svg"
            width={100}
            height={0}
            alt="master card"
            className="mx-2"
          />
          <span>is working with us.</span>
        </div>
        <div className="text-center">
          <Button>
            <Link href="/">CONTACT US NOW</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
