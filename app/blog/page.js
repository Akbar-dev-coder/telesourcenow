import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const page = () => {
  const posts = [
    {
      id: 1,
      title:
        "How to Choose the Best Help Desk Software for Your Support Team in 2025",
      description:
        "As customers increasingly demand fast, seamless support, help desk platforms have become a go-to way...",
      author: "Oleksii Babich",
      updated: "05/21/25",
      time: "10 min read",
      image: "/SUP_banner-7-1024x408.png",
    },
    {
      id: 2,
      title: "Travel Agency Call Center: How to Handle Seasonal Spikes",
      description:
        "About 8 out of 10 business travelers experienced disruptions while travelling in 2024. This number...",
      author: "Daniel Kravchenko",
      updated: "05/27/25",
      time: "11 min read",
      image: "/SUP_cover-2.png",
    },
    {
      id: 3,
      title:
        "Faster Response Times & Scalability: How We Transformed Support for Flibco",
      description:
        "GOAL: As a European airport shuttle service, Flibco, expanded and their customer base grew, they...",
      author: "Anastasiia Svyrydenko",
      updated: "05/15/25",
      time: "3 min read",
      image: "/Frame-1000002643-1024x408.jpg",
    },
    {
      id: 4,
      title:
        "Project Reviews: Bringing Strategy, Insight, and Heart Into Our Client Partnerships",
      description:
        "At SupportYourApp, we believe great partnerships are built not just on performance, but on understanding...",
      author: "Ilya Patricha",
      updated: "05/26/25",
      time: "7 min read",
      image: "/SUP_1-15-1024x408.png",
    },
    {
      id: 5,
      title:
        "Project Reviews: Bringing Strategy, Insight, and Heart Into Our Client Partnerships",
      description:
        "At SupportYourApp, we believe great partnerships are built not just on performance, but on understanding...",
      author: "Ilya Patricha",
      updated: "05/26/25",
      time: "7 min read",
      image: "/SUP_1-15-1024x408.png",
    },
    {
      id: 6,
      title: "Top Technical Support Companies in 2025: An Honest Review",
      description:
        "n 2025, businesses rely on fast, expert tech support more than ever. With software, systems,...",
      author: "By Anastasiia Svyrydenko",
      updated: "05/12/25",
      time: "7 min read",
      image: "/SUP-1024x408.png",
    },
    {
      id: 7,
      title: "My Career Journey: Roman Bednarchyk, Chief Growth Officer",
      description:
        "Introduction Q: Roman, could you tell us what your day-to-day looks like as Chief Growth...",
      author: "By Anastasiia Svyrydenko",
      updated: "05/12/25",
      time: "6 min read",
      image: "/SUP_cover_4-1-1024x408.png",
    },
    {
      id: 8,
      title:
        "Proactive vs Reactive Customer Service: Benefits and Best Practices",
      description:
        "Customer service is central to a company’s success, brand image, and audience’s loyalty. HubSpot’s State...",
      author: "By Ilya Patricha",
      updated: "04/18/25",
      time: "11 min read",
      image: "/SUP_banner-2-1024x408.png",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row gap-2.5">
        <div className="flex-1/2 sm:flex-1/2 bg-gray-100 p-6 rounded shadow text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Support Knowledge Base
          </h2>
          <p className="text-sm text-gray-700">
            Challenges make us stronger, right? We’ve certainly been through our
            share of those for the past 13 years. Victories, failures, lessons —
            all of these bring invaluable experience, no doubt. Here we share
            our adventure with you.
          </p>
        </div>
        <div className="flex-1/2 sm:flex-1/2 humain-bg bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 p-6 rounded shadow relative flex">
          <div>
            <h3 className="text-xl font-bold mb-2">Is Human Support Doomed?</h3>
            <p className="text-sm mb-4">
              Check out our latest eBook to find out.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded border border-black">
              Download
            </Button>
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/human-ai-synergy-img.png"
              alt="Human AI Synergy eBook"
              width={300}
              height={64}
              className="rounded"
            />
          </div>
        </div>
        <div className="flex-1/2 sm:flex-1/8 bg-yellow-100 p-6 py-20 rounded shadow text-center space-y-4">
          <p className="text-lg text-gray-800">
            ♥ Like us on ↓ <br />
            <strong>Facebook</strong>.
            <br />
            We post nice stuff.
          </p>
          <div className="flex justify-center gap-2">
            <Button>👍 Like 2K</Button>
            <Button>Share</Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded shadow overflow-hidden"
            >
              <div className="h-90 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between bg-[#EDECED] space-y-2">
                <h3 className="font-bold text-md mb-2 underline leading-snug">
                  <Link href="/">{post.title} </Link>
                </h3>
                <p className="text-lg text-gray-600 ">{post.description}</p>
                <div className="text-xs text-gray-500 ">
                  <p className="font-medium">{post.author}</p>
                  <div className="flex justify-between mt-2">
                    <h2>Updated: {post.updated} </h2>
                    <h2>{post.time} </h2>
                  </div>
                </div>
                <div>
                  <Button className="mt-4">
                    <Link href="#">Continue Reading</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto bg-[#EDECED] py-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default page;
