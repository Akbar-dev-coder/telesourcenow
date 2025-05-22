import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="social-banner m-3 md:h-[600px] h-[300px] flex justify-end items-center">
        <div className="max-w-[500px] text-center text-white">
          <div className="md:text-6xl text-4xl font-bold">
            SupportYourApp Social Activities
          </div>
          <p className="pt-5 font-bold">
            Since its inception in 2010, SupportYourApp has always made a social
            impact, helped our communities, and made the world around us better.
            Over the years, our team has created initiatives to address the most
            critical social problems.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2.5 m-3">
        <div className="flex-1/2 md:flex-1/6 relative ">
          <div className=" initiative-section flex flex-col gap-1">
            <div>
              <Image
                src="/initiatives-img-1.webp"
                width={600}
                height={0}
                alt="img-1"
              />
            </div>
            <div>
              <Image
                src="/initiatives-img-2.webp"
                width={600}
                height={0}
                alt="img-2"
              />
            </div>
            <div className="w-full h-17 overflow-hidden">
              <Image
                src="/initiatives-img-3.webp"
                width={600}
                height={50}
                alt="img-3"
              />
            </div>
          </div>
        </div>
        <div className="flex-1/2 md:flex-1/2 grid grid-cols-2 gap-1">
          <div className="bg-purple-100 col-span-2">
            <div className="py-10 px-7">
              <h2 className="font-bold text-4xl">Wartime Initiatives</h2>
              <p className="text-xl pt-7">
                In February 2022, russian forces invaded Ukraine and started
                bombarding cities and attacking civilians living in them.
                Thousands of people stayed in the occupied territories, cut from
                electricity, food and water supply, or evacuated to safety
                through the routes under fire. SupportYourApp took part in
                organizing two call centers that can provide critical and
                credible information and help solve individual cases.
              </p>
            </div>
          </div>
          <div className="bg-purple-100 md:col-span-1 col-span-2">
            <div className="py-5 px-7 ">
              <div>
                <Image
                  src="/initiatives-icon-1.svg"
                  width={30}
                  height={0}
                  alt="icon-1"
                />
              </div>
              <h2 className="text-2xl font-bold pt-7">Help Ukraine Center</h2>
              <p className="text-xl pt-7">
                Along with volunteers, the members of the SupportYourApp team
                are coordinating the humanitarian help for Ukraine that is
                coming from the warehouses in Poland and Romania.
              </p>
            </div>
          </div>
          <div className="bg-purple-100 md:col-span-1 col-span-2">
            <div className="py-5 px-7">
              <div>
                <Image
                  src="/initiatives-icon-2.svg"
                  width={30}
                  height={0}
                  alt="icon-2"
                />
              </div>
              <h2 className="font-bold text-2xl pt-7">Bucha Help Center</h2>
              <p className="text-xl pt-7">
                Along with the local volunteers and activists, SupportYourApp
                was able to help the people in Bucha, a suburb of Kyiv that was
                occupied by the russian troops for more than a month. The center
                helped create a database of the people and their needs, and
                evacuation routes. For some time, the call center was one of a
                few links between Bucha and the outside world.
              </p>
            </div>
          </div>
          <div className="bg-purple-100 md:col-span-1 col-span-2">
            <div className="py-10 px-7">
              <p className="text-xl">
                We have also been helping individuals who need financial help,
                medicine, food, and accommodations by creating databases of
                volunteers both in and outside Ukraine and coordinating the
                delivery of humanitarian help.
              </p>
            </div>
          </div>
          <div className="bg-amber-300 md:col-span-1 col-span-2">
            <div className="py-10 px-7">
              <h2 className="text-4xl font-bold pt-3 pb-10">
                Support our fight for freedom
              </h2>
              <div>
                <Button>
                  <Link href="/">Save UA lives</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2.5 m-3">
        <div className="md:flex-1/2 flex-1/2">
          <div className="grid grid-cols-2 gap-2">
            <div className="eco-content bg-purple-100 col-span-2">
              <div className="py-10 px-7">
                <div className="text-3xl font-bold ">
                  SupportYourApp Eco Strategy 🌿
                </div>
                <p className="pt-7 text-xl">
                  The love for our planet is part of the SupportYourApp DNA. We
                  understand how globalization and economic growth impact the
                  environment and intend to reduce the usage of natural
                  resources. SupportYourApp tries to reduce our carbon footprint
                  and make the world around us a better place.
                </p>
              </div>
            </div>
            <div className="eco-content bg-purple-100 md:col-span-1 col-span-2">
              <div className="py-10 px-7">
                <div className="text-6xl font-bold">74%</div>
                <p className="pt-7 text-xl">
                  Replaced of our office detergents with eco-options.
                </p>
              </div>
            </div>
            <div className="eco-content bg-purple-100 md:col-span-1 col-span-2">
              <div className="py-10 px-7">
                <div className="text-6xl font-bold">1000+</div>
                <p className="pt-7 text-xl">
                  Started sorting our waste and giving it up for recycling. For
                  example, in 2021, we recycled more than 1000 tetra packs.
                </p>
              </div>
            </div>
            <div className="bg-eco-content md:col-span-1 col-span-2">
              <div className="py-10 px-7">
                <p className="pt-7 text-xl text-white">
                  Replaced almost all household items made of plastic and
                  started implementing more recycled materials into the everyday
                  life of all our offices.
                </p>
              </div>
            </div>
            <div className="eco-content bg-purple-100 md:col-span-1 col-span-2">
              <div className="py-10 px-7">
                <div className="text-6xl font-bold">26 </div>
                <p className="pt-7 text-xl">
                  Started giving up batteries and lightbulbs for safe
                  utilization. In 2023, we gave up 12,6 kilograms of batteries
                  and 26 lightbulbs to be utilized.
                </p>
              </div>
            </div>
            <div className="eco-content bg-purple-100 md:col-span-1 col-span-2">
              <div className="py-10 px-7">
                <div className="text-6xl font-bold">100+</div>
                <p className="pt-7 text-xl">
                  Implemented eco-safe and eco-conscious items into our merch
                  line and have presented more than 100 eco-bags to the members
                  of our team.
                </p>
              </div>
            </div>
            <div className="eco-content bg-purple-100 md:col-span-1 col-span-2">
              <div className="py-10 px-7">
                <p className="pt-7 text-xl">
                  Cleaned up parts of the {"Holosiivs'kyi"} park in Kyiv and
                  gave up the trash we have picked up to be recycled.
                </p>
              </div>
            </div>
            <div className="eco-content bg-purple-100 col-span-2">
              <div className="py-10 px-7">
                <p className="pt-7 text-xl">
                  In the future, we want to completely abolish the use of
                  plastic in our office, encourage our team to get to the office
                  by bicycles instead of cars, and start recycling home
                  appliances and other small electronics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:flex-1/7 flex-1/2 relative ">
          <div className="eco-img ">
            <div>
              <Image
                src="/eco-img.webp"
                width={600}
                height={0}
                alt="eco-img-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 m-3">
        <div className="flex-1/2 md:flex-1/6">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <Image
                src="/charity-img-1.webp"
                width={600}
                height={0}
                alt="charity-img-1"
              />
            </div>
            <div>
              <Image
                src="/charity-img-2.webp"
                width={600}
                height={0}
                alt="charity-img-2"
              />
            </div>
          </div>
        </div>
        <div className="flex-1/2 md:flex-1/2">
          <div className="grid grid-cols-2 gap-2">
            <div className="py-10 px-7 bg-purple-100 col-span-2">
              <div className="text-3xl font-bold">Charity Initiative</div>
              <p className="pt-7 text-xl">
                SupportYourApp takes part in numerous charity initiatives. Even
                our corporate events and get-togethers are held with charitable
                ideas in mind. If the cause is good, we are always very happy to
                contribute to it.
              </p>
            </div>
            <div className="py-10 px-7 bg-purple-100 md:col-span-1 col-span-2">
              <div className="">
                <Image
                  src="/charity-icon-1.svg"
                  width={50}
                  height={0}
                  alt="charity-icon-1"
                />
              </div>
              <p className="pt-7 text-xl">
                In 2023, the SupportYourApp team helped children in the Kmytov
                Boarding school. The children, often deprived of or lacking
                parental care, received tasties, toys, puzzles, clothes, and
                other necessities from our entire team.
              </p>
            </div>
            <div className="py-10 px-7 bg-purple-100 md:col-span-1 col-span-2">
              <div className="">
                <Image
                  src="/charity-icon-2.svg"
                  width={50}
                  height={0}
                  alt="charity-icon-1"
                />
              </div>
              <p className="pt-7 text-xl">
                Every year, the members of the SupportYourApp team take part in
                charity marathons and runs. The funds gathered during these
                Kyiv-held events are transferred to various charities. In 2023,
                members of our team took part in the Kyiv Marathon and
                successfully completed 5, 10, and 21 kilometer runs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 flex flex-wrap flex-col md:flex-row">
        <div className="flex-1/2 md:flex-1/3">
          <div className="py-10 px-7 bg-[#DCEBF8]">
            <div className="text-4xl font-bold">
              Support Your Horse Initiative
            </div>
            <p className="pt-8 text-xl">
              In 2019, by the initiative of the SupportYourApp CTO, our team
              saved a horse named Fichta. Now, she lives at the Golden Horse
              stable near Kyiv, where she can gallop, walk, and enjoy fresh air
              and the green grass.
            </p>
            <p className="pt-8 text-xl">
              Support Your Horse Initiative SupportYourApp is always ready and
              willing to treat Fichta with tasties. We gathered more than{" "}
              <span className="font-bold"> 10 000 UAH</span> and donated it to
              the stable.
            </p>
          </div>
        </div>
        <div className="flex-1/2 md:flex-1/2 horse">
          <div className="min-h-[200px] max-h-[476px] overflow-hidden">
            <Image src="/horse.webp" width={750} height={0} alt="horse" />
          </div>
        </div>
      </div>
      <div className="bg-yellow-400  m-3">
        <div className="py-10 px-7">
          <div className="font-bold text-4xl pb-5">
            SupportYourApp Book Club
          </div>
          <p className="pt-7">Think before you speak, read before you think.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row m-3 gap-2">
        <div className="flex-1/2 bg-purple-100">
          <div className="py-5 px-7">
            <div className="pb-5">
              <Image
                src="/initiatives-icon-1.svg"
                width={30}
                height={0}
                alt="initiatives-icon-1"
              />
            </div>
            <p className="text-xl py-5">
              As fans and firm believers in non-stop development and learning,
              we have established a book club, where every department reads the
              books of their choosing and then discusses and shares their
              opinions about it. From management to psychology to fiction — the
              range of topics is limitless, which helps us learn new things and
              broaden our horizons.
            </p>
            <p className="text-xl py-3.5">
              Reading the same books also helps us speak the same language and
              understand one another.
            </p>
          </div>
        </div>
        <div className="flex-1/2 bg-purple-100">
          <div className="py-5 px-7">
            <div className="pb-5">
              <Image
                src="/initiatives-icon-2.svg"
                width={30}
                height={0}
                alt="initiatives-icon-1"
              />
            </div>
            <p className="text-xl py-5">
              To engage as many members of SupportYourApp in reading as
              possible, we established a corporate library. Right now, it
              contains 161 books, and the number is growing every month.
              Everyone can take out a book they want to read for up to 2 months
              at a time. The three most popular books in our library are:
            </p>
            <ul className="pl-10">
              <li className="font-bold text-xl leading-5">
                No B.S. Ruthless Management of People and Profits: No Holds
                Barred, Kick Butt, Take-No-Prisoners Guide to Really Getting
                Rich <span className="font-normal "> by Dan Kennedy</span>
              </li>
              <li className="font-bold text-xl leading-5 py-5">
                Essentialism: The Disciplined Pursuit of Less
                <span className="font-normal "> by Greg McKeown</span>
              </li>
              <li className="font-bold text-xl">
                Brave New World
                <span className="font-normal "> by Aldous Huxley.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row m-3 gap-2.5">
        <div className="flex-1/2 md:flex-1/6 bg-amber-100">
          <div className="py-11 px-7">
            <h3 className="text-4xl"> Visit to an Animal Shelter </h3>
            <p className="pt-7 text-xl">
              In July 2022, the members of our team took part in the social
              initiative aimed at helping animals that lost homes due to russian
              invasion. 14 of our teammates spent the time with the dogs from
              the shelter, walked them around the local park, and entertained
              them with belly rubs and tasty treats. They also donated some food
              to the shelter that is currently housing the furry friends.
            </p>
          </div>
        </div>
        <div className="flex-1/2 md:flex-1/2">
          <div className="flex flex-col md:flex-row gap-1">
            <div className="flex-1/2 flex">
              <Image
                src="/Shelter_mutual.webp"
                width={600}
                height={0}
                alt="shelter"
              />
            </div>
            <div className="flex-1/2 grid grid-cols-2 gap-1">
              <div className="col-span-1">
                <Image
                  src="/Shelter_3.webp"
                  width={300}
                  height={0}
                  alt="shelter"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/Shelter_5.webp"
                  width={300}
                  height={0}
                  alt="shelter"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/Shelter_4.webp"
                  width={300}
                  height={0}
                  alt="shelter"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src="/Shelter_2.webp"
                  width={300}
                  height={0}
                  alt="shelter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2.5 m-3">
        <div className="flex-1/2 md:flex-1/2 bg-purple-100">
          <div className="py-10 px-7">
            <h2 className="text-3xl font-bold py-2.5">SupportYourApp LIVE </h2>
            <div className="text-lg ">
              Customer support is what we do best. But we also do our best to
              make the world a better place.
            </div>
          </div>
        </div>
        <div className="flex-1/2 md:flex-1/6 bg-yellow-100">
          <div className="py-10 px-7">
            <div className="text-xl font-bold text-blue-500">
              ♥︎ Like us on ↓ Facebook. We post nice stuff.
            </div>
            <div className="mt-3.5">
              <Button>
                <Link href="https://www.facebook.com/supportyourapp">
                  Like 1.7k
                </Link>
              </Button>{" "}
              <Button>
                <Link href="https://www.facebook.com/supportyourapp">
                  Share
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2.5 m-3">
        <div className="ukrain md:flex-1/3">
          <div className="overlay">
            <div className="pt-14 pb-10 px-7">
              <div className="text-2xl font-bold text-white ">
                Support Ukrainian Army
              </div>
              <div className="pt-29">
                <Button>
                  <Link href="/"> Continue Reading </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="result md:flex-1/3">
          <div className="overlay">
            <div className="pt-14 pb-10 px-7">
              <div className="text-2xl font-bold text-white ">
                2021 — SupportYourApp Results
              </div>
              <div className="pt-20">
                <Button>
                  <Link href="/"> Continue Reading </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="team md:flex-1/3">
          <div className="overlay">
            <div className="pt-14 pb-10 px-7">
              <div className="text-2xl font-bold text-white ">
                Investing in Our Support Teams
              </div>
              <div className="pt-20">
                <Button>
                  <Link href="/"> Continue Reading </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mtt-bg m-3 md:py-[110px] py-16">
        <div className="md:w-[700px] mx-auto">
          <div className="text-center text-2xl md:text-4xl font-bold ">
            Want to see the faces behind SupportYourApp charity initiatives?
          </div>
          <div className="text-center py-10">
            <Button>
              <Link href="/our-team">MEET THE TEAM </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
