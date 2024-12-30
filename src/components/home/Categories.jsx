// import React from "react";
// import { Card, CardTitle, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import image1 from "../../assets/image.jpg";
// import image2 from "../../assets/imageCpy.jpg";

// export default function Categories() {
//   const items = [
//     { title: "Luxury Sofa", image: image1 },
//     { title: "Desks", image: image2 },
//     { title: "Royal Chairs", image: image1 },
//     { title: "Modern Tables", image: image2 },
//     { title: "Bed Sets", image: image1 },
//     { title: "Wall Units", image: image2 },
//     { title: "Office Chairs", image: image1 },
//     { title: "Coffee Tables", image: image2 },
//   ];

//   // Group items into sets of 4 for mobile view
//   const itemSets = [];
//   for (let i = 0; i < items.length; i += 4) {
//     itemSets.push(items.slice(i, i + 4));
//   }

//   return (
//     <div className="mt-8 p-4 md:p-8">
//       <h2 className="text-center md:text-start text-2xl font-bold relative">
//         Categories
//       </h2>

//       {/* Mobile Layout (scrollable 2x2 grid sets) */}
//       <div className="md:hidden mt-8 overflow-x-auto scrollbar-hide">
//         <div className="flex w-max">
//           {itemSets.map((set, setIndex) => (
//             <div key={setIndex} className="grid grid-cols-2 gap-4 mr-4 w-[calc(100vw-2rem)]">
//               {set.map((item, index) => (
//                 <Card
//                   key={index}
//                   className="text-center w-full flex items-center justify-center"
//                 >
//                   <CardContent className="p-2">
//                     <div className="h-36 w-full relative">
//                       <Image
//                         src={item.image}
//                         fill
//                         alt={item.title}
//                         className="rounded-md object-cover"
//                       />
//                     </div>
//                     <CardTitle className="text-sm font-normal py-2">
//                       {item.title}
//                     </CardTitle>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Desktop Layout (4x2 grid) */}
//       <div className="hidden md:grid grid-cols-4 gap-6 mt-12">
//         {items.map((item, index) => (
//           <Card
//             key={index}
//             className="text-center w-full flex items-center justify-center"
//           >
//             <CardContent className="p-4">
//               <div className="h-48 w-full relative">
//                 <Image
//                   src={item.image}
//                   fill
//                   alt={item.title}
//                   className="rounded-md object-cover"
//                 />
//               </div>
//               <CardTitle className="text-lg font-normal py-2">
//                 {item.title}
//               </CardTitle>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import image1 from "../../assets/image.jpg";
import image2 from "../../assets/imageCpy.jpg";

export default function Categories() {
  const items = [
    { title: "Luxury Sofa", image: image1 },
    { title: "Desks", image: image2 },
    { title: "Royal Chairs", image: image1 },
    { title: "Modern Tables", image: image2 },
    { title: "Bed Sets", image: image1 },
    { title: "Wall Units", image: image2 },
    { title: "Office Chairs", image: image1 },
    { title: "Coffee Tables", image: image2 },
  ];

  return (
    <div className="mt-12 p-2 md:p-8 ">
      <h2 className="text-center md:text-start text-2xl font-bold">
        Categories
      </h2>

      {/* Mobile Layout */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="grid auto-cols-[48%] grid-flow-col grid-rows-2 gap-4 mt-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="text-center w-full flex items-center justify-center shadow-lg aspect-square mt-6"
            >
              <CardContent className="p-2 w-full h-full">
                <div className="h-full w-full relative -mt-8">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="rounded-md object-cover w-full"
                  />
                </div>
                <CardTitle className="text-sm font-normal py-2">
                  {item.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-4 gap-6 mt-10">
        {items.map((item, index) => (
          <Card
            key={index}
            className="text-center w-full flex items-center justify-center shadow-lg mt-4"
          >
            <CardContent className="p-4 w-full">
              <div className="h-48 -mt-10 w-full relative">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
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
