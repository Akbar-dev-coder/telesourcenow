import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="section-container lg:py-35 m-3 flex flex-col justify-center items-center ">
        <div className="text-6xl font-bold ">We are here to support you</div>
        <p className="py-8 text-xl">
          Combining expertise, empathy, and cutting-edge solution to make every
          interaction into a memorable experience.
        </p>
      </div>
      <div className="card-container flex items-stretch m-3 gap-4 flex-col lg:flex-row">
        <div className="card-content flex-1 justify-center items-center min-h-80 py-8 px-10 bg-amber-400 overflow-hidden">
          <div className=" h-full">
            <div className="card-visible static ">
              <h2 className="text-6xl font-bold mt-0 mb-0 text-center">
                {" "}
                Mission{" "}
              </h2>
            </div>
            <div className="my-card-blur">
              <p className="text-center text-xl">
                To create an ecosystem where the best of people and technology
                work together to turn a one-time customer into a lifelong
                client.
              </p>
            </div>
          </div>
        </div>
        <div className="card-content flex-1 justify-center items-center min-h-80 py-8 px-10 bg-amber-400 overflow-hidden">
          <div className="h-full">
            <div className="card-visible static">
              <h2 className="text-6xl font-bold mt-0 mb-0 text-center">
                {" "}
                Vision{" "}
              </h2>
            </div>
            <div className="my-card-blur">
              <p className="text-center text-xl">
                To revolutionize the CX industry and become the most influential
                company in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className=" m-3">
        <ul className="grid md:grid-cols-3 gap-2 ">
          <li className="col-span-full py-8 px-10 text-center bg-purple-200">
            <h1 className="text-2xl font-bold">Value </h1>
          </li>
          <li className="bg-purple-200 text-center py-8 px-10">
            <Image
              src="/honesty.svg"
              width={50}
              height={0}
              alt="pc"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5"> Honesty </div>
            <div className="pt-3">
              We are clear and straightforward in communication with our clients
              and teammates, exchanging accurate information that precisely
              describes reality.{" "}
            </div>
          </li>
          <li className="bg-purple-200 text-center py-8 px-10 ">
            <Image
              src="/loyalty.svg"
              width={50}
              height={0}
              alt="pic"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5"> Loyalty </div>
            <div className="pt-4">
              We defend our clients’ interests above personal and always stay
              true to our team.
            </div>
          </li>
          <li className="bg-purple-200 text-center py-8 px-10">
            <Image
              src="/Challenge.svg"
              width={50}
              height={0}
              alt="pic"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5">
              {" "}
              Challenge{" "}
            </div>
            <div className="pt-4">
              We are ready to handle projects of any complexity and thrive on
              achieving challenging goals.
            </div>
          </li>
        </ul>
        <ul className="grid md:grid-cols-2 gap-2 mt-1">
          <li className="bg-purple-200 py-8 px-10">
            <Image
              src="/Accuracy.svg"
              width={50}
              height={0}
              alt="pic"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5">
              {" "}
              Accuracy{" "}
            </div>
            <div className="">
              We fulfill obligations and aim to do it perfectly. We do not
              disregard the details. This is the reason our clients trust us
              with their customers.
            </div>
          </li>
          <li className="bg-purple-200 py-8 px-10">
            <Image
              src="/People_First.svg"
              width={50}
              height={0}
              alt="pic"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5">
              {" "}
              People First{" "}
            </div>
            <div className="">
              We always put people at the center of attention and make all
              decisions based on their needs. This refers to both clients and
              our team members, whom we treat equally.
            </div>
          </li>
        </ul>
        <ul className="grid md:grid-cols-3 gap-2 mt-1">
          <li className="bg-purple-200 text-center py-8 px-10">
            <Image
              src="/Responsibility.svg"
              width={50}
              height={0}
              alt="pc"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5">
              {" "}
              Responsibility{" "}
            </div>
            <div className="pt-3">
              We constantly control the situation and take responsibility for
              all our decisions.{" "}
            </div>
          </li>
          <li className="bg-purple-200 text-center py-8 px-10">
            <Image
              src="/Respect.svg"
              width={50}
              height={0}
              alt="pic"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5"> Respect </div>
            <div className="pt-4">
              We value people’s time, work, and insight and act accordingly with
              our clients and teammates.
            </div>
          </li>
          <li className="bg-purple-200 text-center py-8 px-10">
            <Image
              src="/Teamwork.svg"
              width={50}
              height={0}
              alt="pic"
              className="mx-auto"
            />
            <div className="text-2xl font-bold text-center pt-5"> Teamwork</div>
            <div className="pt-4">
              We create a supportive and collaborative environment which helps
              us deliver quality services on time.
            </div>
          </li>
        </ul>
      </section>
      <section className="grow-section text-3xl text-center m-3 p-30 text-white font-bold">
        We Support. You Grow.
      </section>
    </>
  );
};

export default page;
