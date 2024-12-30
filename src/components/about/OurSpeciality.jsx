import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import craft1 from "../../assets/craft-1.jpeg";
import craft2 from "../../assets/craft-2.jpeg";
const OurSpeciality = () => {
  return (
    <div className="md:mt-8 p-4 sm:p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Our Speciality</h2>
      {/* left container */}
      <div className="flex justify-around gap-4 flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-[45%] space-y-4 text-center md:text-start">
          <p>
            Our specialty lies in crafting custom designs that closely align
            with your vision. We strive to achieve a remarkable 90% resemblance
            to the design you provide, ensuring a personalized and tailored
            result that truly reflects your unique preferences.
          </p>
          <Link href={`tel:+919999999999`} className="block mt-4">
            <Button className="w-1/2">Call Now</Button>
          </Link>
        </div>

        <div className="md:w-[45%]  w-full md:flex-col space-y-4 flex-row">
          <Image
            src={craft1}
            width={250}
            height={250}
            alt="Our Speciality"
            className=""
          />
          <Image
            src={craft2}
            width={250}
            height={250}
            alt="Our Speciality"
            className="ml-auto"
          />
          <Image src={craft1} width={250} height={250} alt="Our Speciality" />
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
