"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";
import image1 from "../../assets/image.jpg";
import image2 from "../../assets/imageCpy.jpg";
let carouselItems = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image1,
  },
  {
    id: 4,
    image: image2,
  },
  {
    id: 5,
    image: image1,
  },
];

export default function CarouselUI() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [AutoPlay({ delay: 3000, stopOnInteraction: true })] // Changed to stop on interaction
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="relative w-full sm:w-[95%] mx-auto my-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselItems.map((item) => (
            <div key={item.id} className="flex-[0_0_100%] min-w-0 md:p-8">
              <Card className="h-[60dvh] md:h-[90dvh]">
                <CardContent className="flex h-full w-full aspect-square relative">
                  <Image
                    src={item.image}
                    fill
                    className="object-cover"
                    alt={`Carousel image ${item.id}`}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14  items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors hidden md:flex"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14  items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors hidden  md:flex"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Enhanced Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 p-2 rounded-full">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-black scale-110"
                : "bg-black/20 hover:bg-black/60"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
// "use client";
// import * as React from "react";
// import image1 from "../../assets/image.jpg";
// import image2 from "../../assets/imageCpy.jpg";
// import { Card, CardContent } from "@/components/ui/card";
// import Autoplay from "embla-carousel-autoplay";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../ui/carousel";
// import Image from "next/image";

// let carouselItems = [
//   {
//     id: 1,
//     image: image1,
//   },
//   {
//     id: 2,
//     image: image2,
//   },
//   {
//     id: 3,
//     image: image1,
//   },
//   {
//     id: 4,
//     image: image2,
//   },
//   {
//     id: 5,
//     image: image1,
//   },
// ];

// export default function CarouselUI() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           loop: true,
//           delay: 3000,
//         }),
//       ]}
//       className="w-[95%] sm:w-3/4 mx-auto my-8"
//       opts={{
//         align: "start",
//         loop: true,
//       }}
//     >
//       <CarouselContent>
//         {carouselItems.map((item) => (
//           <CarouselItem key={item.id}>
//             <div className="p-1">
//               <Card className="h-[60dvh] md:h-[90dvh]">
//                 <CardContent className="flex h-full w-full aspect-square relative">
//                   <Image
//                     src={item.image}
//                     fill
//                     className="object-cover"
//                     alt={`Carousel image ${item.id}`}
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

// "use client";
// import React from "react";
// import image1 from "../../assets/image.jpg";
// import image2 from "../../assets/imageCpy.jpg";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const carouselItems = [
//   {
//     id: 1,
//     image: image1,
//   },
//   {
//     id: 2,
//     image: image2,
//   },
//   {
//     id: 3,
//     image: image1,
//   },
//   {
//     id: 4,
//     image: image2,
//   },
//   {
//     id: 5,
//     image: image1,
//   },
// ];

// export default function CarouselUI() {
//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="w-full sm:w-[95%] mx-auto my-8"
//     >
//       {carouselItems.map((item) => (
//         <SwiperSlide key={item.id} className="md:p-12">
//           <Card className="h-[60dvh] md:h-[90dvh]">
//             <CardContent className="flex h-full w-full aspect-square relative">
//               <Image
//                 src={item.image}
//                 fill
//                 className="object-cover"
//                 alt={`Carousel image ${item.id}`}
//               />
//             </CardContent>
//           </Card>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
