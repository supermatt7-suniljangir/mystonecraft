import React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import image1 from "../../assets/image.jpg";
import image2 from "../../assets/imageCpy.jpg";
export default function Categories() {
  const items = [
    { title: "Luxury sofa", image: image1 },

    { title: "Desks", image: image2 },
    { title: "Royal Chairs", image: image1 },
  ];

  return (
    <div className="mt-8 p-4 md:p-8">
      <h2 className="text-center md:text-start text-2xl font-bold relative h-auto">
        Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-12 md:gap-0 mt-12 relative place-items-center">
        {items.map((item, index) => (
          <Card
            key={index}
            className="text-center w-80 h-56 flex items-center justify-center"
          >
            <CardContent>
              <div className="h-52 w-72 relative">
                <Image
                  src={item.image}
                  fill
                  alt="sofa"
                  className="rounded-md object-cover"
                />
              </div>
              <CardTitle className="text-lg font-normal py-2">
                {item.title}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
