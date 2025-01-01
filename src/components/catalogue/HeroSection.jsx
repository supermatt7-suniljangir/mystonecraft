/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Milestone, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
// Remove background import if you are setting it dynamically in the component
// import background from "../../assets/bg.jpeg";

const HeroSection = ({ category }) => {
  const background = category.background || "/assets/bg.jpeg";
  return (
    <div
      className="relative md:h-screen h-auto
    w-full overflow-hidden text-primary-foreground p-4"
    >
      <div
        className={cn("absolute inset-0 bg-cover bg-center bg-no-repeat")}
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className=" flex h-full flex-col md:flex-row md:flex-start items-center justify-around mt-24 py-10 md:mt-0 md:py-0">
        <Card className="relative w-full  md:w-1/2 mx-auto bg-transparent border-none shadow-none text-background">
          <CardContent className="flex flex-col items-center text-center md:text-start justify-center space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-extrabold !leading-tight capitalize">
                Explore {category.category.split("-").join(" ")}
              </h1>
              <h2 className="text-lg font-normal">
                Get the best products in the market from a range starting from
                just{" "}
                <span className="block text-5xl font-extrabold mt-3">
                  ₹{category.price}
                </span>
              </h2>
            </div>
            <div className="flex flex-col w-full sm:flex-row gap-4 md:justify-start justify-center">
              <Link
                target="_blank"
                href={`https://www.google.com/maps?ll=17.420017,78.229036&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=5709170577501979575`}
              >
                <Button
                  variant="secondary"
                  className="bg-black/50  w-32 rounded-none text-background hover:text-primary"
                >
                  <Milestone /> Locate Us
                </Button>
              </Link>
              <a href="tel:+919999999999" className="block">
                <Button
                  variant="secondary"
                  className="bg-black/50 w-32 rounded-none text-background hover:text-primary"
                >
                  <Phone className=" h-2 w-2" />
                  Call Us
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="w-full md:w-1/2  gap-2 flex md:flex-col mt-8">
          <div className="relative md:w-60 w-1/3 md:h-36 md:ml-auto sm:h-28 h-24">
            <Image
              fill
              src={category.media[0].image}
              alt={category.media[0].name}
              objectFit="cover"
            />
          </div>
          <div className="relative md:w-60 w-1/3 sm:h-28 md:h-36 h-24 md:ml-[10rem] mt-8 md:mt-0">
            <Image
              fill
              src={category.media[1].image}
              alt={category.media[1].name}
              objectFit="cover"
            />
          </div>
          <div className="relative md:w-60 w-1/3 sm:h-28 md:h-36 h-24  mt-16 md:mt-0">
            <Image
              fill
              src={category.media[0].image}
              alt={category.media[0].name}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
