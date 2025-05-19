import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section_6 = () => {
  return (
    <div className="@container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row lg:gap-2 md:mx-3">
        <div className="bg-purple-200 lg:flex-1/2 p-15">
          <div className="md:w-[600px] mx-auto">
            <div className="text-5xl font-bold">
              Customer Service Outsourcing: What’s It All About
            </div>
            <p className="pt-2.5">
              {" "}
              Top-tier customer care is crucial for business success — customers
              stay loyal and return to you time and again. They become your
              advocates, recommending your products or services to others.
              However, customer service support takes time and effort to set up
              and maintain. Scaling a support team once your business starts
              growing is another challenge.
            </p>
            <p className="py-10">
              Customer support outsourcing not only makes things easier for you,
              it helps improve your customer retention, drive referral growth,
              and ramp up your CSAT levels.
            </p>
            <div className="text-3xl font-bold">
              SupportYourApp — Your Trusted Customer Care Outsourcing Partner
            </div>
            <p className="pt-2.5">
              For the past decade, we’ve been delivering customer service
              solutions tailored specifically to our clients’ business needs. We
              have a track record of partnering with clients like Calm, MacPaw,
              Here, Glovo, Mastercard, and others.
            </p>
            <p className="py-5">
              We believe that support is more than just resolving tickets.
              Rather, it’s building a lasting relationship with your customers,
              leaving a positive impression with every interaction.
            </p>
            <p className="pb-2.5">
              That’s what we help our clients to achieve — create a connection
              with their customers, ultimately, boosting satisfaction and sales.
            </p>
            <div className="text-3xl font-bold">Why Choose SupportYourApp?</div>
            <p className="py-5">
              Our expertise spans multiple industries, business sizes from
              startups to corporations, and diverse global markets:
            </p>
            <ul className="list-disc pl-10">
              <li>
                14+ years of experience providing 24/7 secure outsourced
                customer service
              </li>
              <li>
                We train support teams in your industry specifics and to meet
                your business needs
              </li>
              <li>
                Omnichannel CX services — email, chat, phone calls, social
                media, and others
              </li>
              <li>
                Scalable teams: support team size is adjusted based on seasonal
                spikes or daily changes
              </li>
              <li>
                We speak 60+ languages and have worked with clients in 30+
                countries
              </li>
              <li>
                AI-driven technology use — we automate up to 70% of support
                inquiries
              </li>
              <li>
                PCI-DSS certified and GDPR-compliant, we safeguard your data
              </li>
            </ul>
            <p className="py-5">
              As your support-as-a-service partner, we’ll take care of all your
              support needs, so you’ll be able to focus on your core business
              tasks. Let’s connect and see what kind of solution works best for
              you. Contact us today to{" "}
              <Link href="/" className="text-blue-700 underline">
                {" "}
                get a quote{" "}
              </Link>
            </p>
            <div className="text-3xl font-bold">
              Perks of Outsourcing Customer Service
            </div>
            <p className="py-5">
              Whether your business is expanding with support lagging behind or
              you don’t have a support team at all, choosing to outsource
              customer service can be the solution.
            </p>
            <div className="text-3xl font-bold pt-1.5">
              Operational efficiency
            </div>
            <p className="py-5">
              Building and maintaining a support team comes with substantial
              amounts of time, effort, not to mention, significant costs.
              Outsourcing to a third-party customer service provider like
              SupportYourApp will help you reduce costs and free up resources to
              focus on growing your business.
            </p>
            <p className="py-5">
              At the same time, you’ll get skilled professionals to handle your
              customer requests with empathy and efficiency.
            </p>
            <div className="text-3xl font-bold">Elevated CSAT score.</div>
            <p className="py-5">
              With our AI-powered chatbots, automating most common inquiries,
              and our experts resolving issues with a personalized approach,
              you’ll be watching your ticket resolution rates skyrocket and your
              customer satisfaction improve within months. Moreover, our support
              consultants are trained in lead generation and marketing, driving
              higher conversions and sales growth
            </p>
            <div className="text-3xl font-bold pt-1.5">
              24/7 availability & flexibility
            </div>
            <p className="py-5">
              SupportYourApp’s support consultants are located in different time
              zones. So, when building a team, we’ll get your customers covered
              round-the-clock.
            </p>
            <p className="py-5">
              Whether you need to scale up or down, we’ll adjust your team
              swiftly. And if you enter new geographic markets, we’ll expand the
              team with consultants speaking the local language.
            </p>
            <div className="text-3xl font-bold">
              Get Started with Customer Service Outsourcing Today
            </div>
            <p className="py-5">
              Still wondering whether you need to hire customer support? Our
              company will develop an outsourcing solution tailored to your
              specific business needs. Check out{" "}
              <Link href="/" className="text-blue-700 underline">
                {" "}
                our packages{" "}
              </Link>{" "}
              to find the best plan for your business.
            </p>
          </div>
        </div>
        <div className=" lg:flex-1/10 relative">
          <div className="img-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Section_6;
