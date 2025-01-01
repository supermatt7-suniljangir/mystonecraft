import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const user = "/assets/user.png";
const HeroSection = () => {
  return (
    // check globals.css for the background image class
    <div className="relative md:h-[100vh] p-4 w-full overflow-hidden text-primary-foreground">
      <div className="absolute inset-0 bg-cover bg-[center_top_30%] bg-no-repeat backgroundImgTestimonials" />
      <div className="absolute inset-0 bg-black/55 z-0" />

      <div className="relative flex flex-col  md:flex-row items-center justify-center h-full z-10 space-y-8 md:space-y-0 pt-10 pb-4">
        {/* Left Content */}
        <Card className="w-full md:w-1/2 mx-auto bg-transparent border-none !shadow-none text-background mt-8 md:mt-0">
          <CardContent className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <p className="text-xl">Our Testimonials</p>
                <div className="bar h-[1.2px] w-32 bg-background"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                What our clients say about us
              </h1>
              <p className="font-normal">
                Witness what our clients have to say about us and our services,
                and how we have helped them with their imagination.
              </p>
              <a href="tel:+919999999999" className="block">
                <Button className="bg-black/70 rounded-none px-16 py-4">
                  Call Now
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Right Content */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <Card className="relative p-4">
            <div className="flex items-center gap-1 absolute -top-[3rem]">
              <div className="w-16 h-16 relative">
                <Image
                  src={user}
                  alt="hero-image"
                  fill
                  className="rounded-full"
                />
              </div>
              <p className="text-lg font-semibold text-background">
                Bill Gates
              </p>
            </div>
            <CardContent className="space-y-4 mt-4 p-2 md:p-4">
              <p className="font-normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis repellendus sint doloribus tenetur facere ad porro
                libero nam, minus similique adipisci vel blanditiis vitae sit
                magnam expedita placeat beatae eius quos sunt dolore a fugit?
                Cum dicta eius alias impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi, eligendi!
              </p>
              <p className="text-sm text-muted-foreground">CEO, Microsoft</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
