import Image from "next/image";
import React from "react";
const Gallary = () => {
  return (
    <div className="w-full h-screen md:h-[200vh] mt-4 relative">
      <Image src={"/assets/gallary.png"} alt="Stonecraft" fill />
    </div>
  );
};

export default Gallary;
