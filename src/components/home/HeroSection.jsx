import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Milestone, Phone } from "lucide-react";
import Link from "next/link";
const HeroSection = () => {
  return (
    // check globals.css for the background image class
    <div className="relative h-screen w-full overflow-hidden text-primary-foreground">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat backgroundImgHome" />
      <div className="absolute inset-0 bg-black/55" />

      <Card className="relative z-10 md:max-w-[60%] mx-auto mt-20 bg-transparent h-full  border-none shadow-none text-background">
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-6 h-3/4">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold !leading-tight ">
              Natural Stone Crafts Suppliers
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Available in hyderabad.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="flex-grow"
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
    </div>
  );
};

export default HeroSection;
