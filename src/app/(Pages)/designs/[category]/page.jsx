/* eslint-disable react/prop-types */
import React from "react";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import HeroSection from "@/components/catalogue/HeroSection";
import Products from "@/components/catalogue/Products";

const CategoryDetails = async ({ params }) => {
  const { category } = (await params) || {};
  const isValidCategory = categories
    .map((cat) => cat.category)
    .includes(category);

  if (!isValidCategory) {
    return (
      <div className="h-screen md:p-4 p-4 flex items-center gap-4 flex-col justify-center bg-foreground text-background text-center">
        <h1 className="text-4xl">Category Not Found</h1>
        <p>
          We Regret to say that the specified range of products is not available
          or there might be an issue
        </p>
        <Link href={"/"}>
          <Button variant="secondary" className="rounded-none">
            <ArrowBigLeft />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const categoryData = categories.find((cat) => cat.category === category);

  return (
    <div>
      <HeroSection category={categoryData} />
      <Products products={categoryData.media}/>
    </div>
  );
};

export default CategoryDetails;
