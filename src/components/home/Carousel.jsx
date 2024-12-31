"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";
import image1 from "../../assets/image.jpg";
import image2 from "../../assets/imageCpy.jpg";

const autoplayOptions = {
  delay: 3000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
};

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
  const autoplay = React.useRef(AutoPlay(autoplayOptions));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset();
    }
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    return () => {
      autoplay.current.stop();
    };
  }, [emblaApi]);

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        autoplay.current.stop();
      } else {
        autoplay.current.reset();
        autoplay.current.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselItems.map((item) => (
            <div key={item.id} className="flex-[0_0_100%] min-w-0 md:p-4">
              <Card className="relative md:h-[95vh]">
                <CardContent className="flex aspect-square md:aspect-auto h-full w-full relative">
                  <Image
                    src={item.image}
                    fill
                    className="object-cover"
                    priority
                    alt={`Carousel image ${item.id}`}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-black/50 text-background hover:bg-black/70 transition-colors flex z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 items-center justify-center rounded-full bg-black/50 text-background hover:bg-black/70 transition-colors flex z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute md:-bottom-4 left-1/2 -translate-x-1/2 flex gap-3 p-2 rounded-full">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-black scale-110"
                : "bg-black/20 hover:bg-black/60"
            }`}
            onClick={() => {
              emblaApi?.scrollTo(index);
              autoplay.current.reset();
            }}
          />
        ))}
      </div>
    </div>
  );
}