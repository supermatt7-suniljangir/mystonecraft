import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import avatar from "../../assets/user.png";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Someone",
      avatar: avatar,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Someone",
      avatar: avatar,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Someone",
      avatar: avatar,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="relative min-h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 backgroundImg bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-background">
          what they say
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-full max-w-sm h-auto">
              <CardContent className="h-full pt-6 flex flex-col justify-between">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 overflow-hidden rounded-full relative">
                    <Image
                      fill
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-center text-muted-foreground">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
