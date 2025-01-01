import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CompanyInfo = () => {
  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "10000+", label: "Satisfied Customers" },
    { value: "4.5+", label: "High Rated Services" },
  ];

  return (
    <div className="w-full flex gap-2 justify-around p-4 md:p-8 flex-col md:flex-row-reverse items-center">
      <div className="md:w-1/2 w-full h-[60vh] relative">
        <Image src={"/assets/about.jpeg"} fill className="rounded-md" />
      </div>

      <div className="w-full md:w-1/2 mx-auto   text-center md:text-start space-y-4">
        <Card className="my-8 p-4 space-y-4 md:p-6 border-none shadow-none">
          <h2 className="text-3xl font-bold">Our Work</h2>
          <CardContent className="p-0">
            <p className="font-normal">
              Our Design&apos;s story dates back to 2011, when Lalit Singh
              Rathore, a design enthusiast himself, felt compelled to provide
              innovative designs for others. Then he met Mr Pritam, an
              enthusiastic architect, with whom he shared a variety of
              interests. They opened a modest Stone-Showroom
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-2">
                  <CardContent className="p-2 text-center">
                    <h3 className="text-2xl font-bold ">{stat.value}</h3>
                    <p className="text-muted-foreground text-sm">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyInfo;
