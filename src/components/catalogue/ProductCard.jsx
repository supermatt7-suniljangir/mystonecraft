/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import BottomButtons from "../layout/others/BottomButtons";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      className="md:w-[30%] cursor-pointer relative sm:w-[47%] rounded-none w-full aspect-square shadow-2xl p-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 h-full">
        <div className="w-full relative h-5/6">
          <Image src={product.image} alt={product.name} fill />
        </div>
        <div className="text-center p-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-muted-foreground">{product.range}</p>
        </div>
      </CardContent>
      {isHovered && (
        <div className="md:block absolute top-0 left-0 w-full h-full bg-black/60">
          <BottomButtons className={"h-full items-center gap-4"} />
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
