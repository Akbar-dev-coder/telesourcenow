"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50 ">
      <div className=" mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" width={220} height={60} alt="Logo" />
        </Link>
        <div className="hidden md:flex space-x-6 z-50">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" flex gap-3 lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className=" h-full w-full rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Image
                            alt="our-client"
                            src="/our-clients.jpg"
                            width={400}
                            height={100}
                          />
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem title="CORE SERVICES">
                      <ul>
                        <li>
                          <Link href="/">Call Center Outsourcing</Link>
                        </li>
                        <li>
                          <Link href="/">Live Chat Support outsourcing</Link>
                        </li>
                        <li>
                          <Link href="/">Help Desk Outsourcing</Link>
                        </li>
                        <li>
                          <Link href="/">Technical Support Outsourcing</Link>
                        </li>
                        <li>
                          <Link href="/">
                            Phone Answering Services Outsourcing
                          </Link>
                        </li>
                        <li>
                          <Link href="/">View All Services </Link>
                        </li>
                      </ul>
                    </ListItem>
                    <ListItem title="TARGETED SERVICES">
                      <ul>
                        <li>
                          <Link href="/">Support Operations Services</Link>
                        </li>
                        <li>
                          <Link href="/">Managed AI Services</Link>
                        </li>
                      </ul>
                    </ListItem>
                    <ListItem title="INDUSTRIES">
                      <ul>
                        <li>
                          <Link href="/">eCommerce Customer Support</Link>
                        </li>
                        <li>
                          <Link href="/">Fintech Customer Support </Link>
                        </li>
                        <li>
                          <Link href="/">SaaS Customer Support </Link>
                        </li>
                        <li>
                          <Link href="/">Game Customer Support </Link>
                        </li>
                        <li>
                          <Link href="/">Healthcare Customer Support</Link>
                        </li>
                        <li>
                          <Link href="/">Amazon Customer Support </Link>
                        </li>
                        <li>
                          <Link href="/">IT Customer Support </Link>
                        </li>
                        <li>
                          <Link href="/">Retail Customer Support </Link>
                        </li>
                        <li>
                          <Link href="/">Shopify Customer Support </Link>
                        </li>
                        <li>
                          <Link href="/">
                            B2B Call Center Customer Support{" "}
                          </Link>
                        </li>
                      </ul>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/our-packages" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Packages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/career" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Career
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" flex gap-3 lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className=" h-full w-full rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Image
                            alt="our-client"
                            src="/inc500-banner.jpg"
                            width={400}
                            height={100}
                          />
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem title="ABOUT US">
                      <ul>
                        <li>
                          <Link href="/company">Why SupportYourApp</Link>
                        </li>
                        <li>
                          <Link href="/our-culture">Our Culture</Link>
                        </li>
                        <li>
                          <Link href="/our-team">Our Team</Link>
                        </li>
                        <li>
                          <Link href="/social-responsibility">
                            Social Responsibility
                          </Link>
                        </li>
                        <li>
                          <Link href="/">Press Page</Link>
                        </li>
                        <li>
                          <Link href="/contactus">Contact Us </Link>
                        </li>
                      </ul>
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button className="hidden md:block"> Get a Qoute </Button>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                ></Button>
              </div>
              <div className="flex flex-col space-y-4">
                <Link href="/">Solutions</Link>
                <Link href="/packages">Our Packages</Link>
                <Link href="/career">Career</Link>
                <Link href="/aboutus">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Button> Get a Quote </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-lf font-medium leading-none">{title}</div>
            <p className=" text-lg leading-10 text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
