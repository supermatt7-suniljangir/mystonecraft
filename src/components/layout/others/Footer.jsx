import React from "react";
import Image from "next/image";
import logo from "../../../assets/user.png";
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto px-4 md:px-8">
        <div className="grid md:border-t grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 md:space-x-4 p-0 items-center place-content-center">
          {/* Logo & Description Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 ">
              <div className="w-12 h-12 relative">
                <Image
                  src={logo}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-medium">Global Stone Art</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* About Column */}
          <div className="md:border-l md:border-r md:p-4 space-y-2">
            <h3 className="text-lg font-medium">Information</h3>
            <p className="text-gray-400 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&pos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Categories and Help Center - Always 2 columns */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-8 md:gap-4 place-items-center">
              {/* Categories Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      category a
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      category b
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      category c
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      category d
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help Center Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Help Center</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Call us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
