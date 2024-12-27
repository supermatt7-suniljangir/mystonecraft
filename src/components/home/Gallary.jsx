import Image from "next/image";
import React from "react";
import gallary from "../../assets/gallary.png"
const Gallary = () => {
  return (
    <div className="w-full h-screen md:h-[200dvh] relative">
      <Image src={gallary} alt="Stonecraft" fill />
    </div>
  );
};

export default Gallary;
