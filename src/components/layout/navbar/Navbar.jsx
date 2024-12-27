"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../../../components/ui/navigation-menu";
import { Button } from "../../../components/ui/button";
import { Menu, X, Home, Phone, Info, Rocket, Star, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Reference for the navbar
  const currentPath = usePathname();

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false); 
  
  }, [currentPath]);

  return (
    <nav
      ref={navbarRef}
      className="w-full bg-transparent absolute top-0 left-0 text-background z-50 px-4 py-1 shadow-2xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 text-background">
          <Link href="/" className="text-xl font-semibold">
            Global Stone Art
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <Link href={"/"} className=" flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </NavigationMenuItem>

              {/* Dropdown Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Designs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[250px] gap-3 p-4">
                    <Link
                      href={"/designs/exterior-design"}
                      className="flex items-center gap-2 p-2 rounded-md"
                    >
                      <Rocket className="h-4 w-4" />
                      <span>Exterior Designs</span>
                    </Link>
                    <Link
                      href={"/designs/interior-design"}
                      className="flex items-center gap-2 p-2 rounded-md"
                    >
                      <Star className="h-4 w-4" />
                      <span>Interior Designs</span>
                    </Link>
                    <Link
                      href={"/designs/garden-elements"}
                      className="flex items-center gap-2 p-2 rounded-md"
                    >
                      <Trophy className="h-4 w-4" />
                      <span>Garden Elements</span>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={"/about"} className=" flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <span>About</span>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={"/contact"} className=" flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-primary">
            <div className="flex flex-col w-full">
              <Link
                className="flex items-center gap-2 p-4 w-full hover:bg-primary/10"
                href="/"
              >
                <Home className="h-5 w-5" />
                Home
              </Link>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="explore" className="border-none">
                  <AccordionTrigger className="flex items-center gap-2 p-4 hover:bg-primary/10 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-5 w-5" />
                      Explore
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col w-full">
                      <Link
                        className="flex items-center gap-2 p-4 pl-8 w-full hover:bg-primary/10"
                        href="/designs/interior-design"
                      >
                        <Star className="h-5 w-5" />
                        Interior Design
                      </Link>
                      <Link
                        className="flex items-center gap-2 p-4 pl-8 w-full hover:bg-primary/10"
                        href="/designs/exterior-design"
                      >
                        <Trophy className="h-5 w-5" />
                        Exterior Design
                      </Link>
                      <Link
                        className="flex items-center gap-2 p-4 pl-8 w-full hover:bg-primary/10"
                        href="/designs/garden-elements"
                      >
                        <Rocket className="h-5 w-5" />
                        Garden Elements
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                className="flex items-center gap-2 p-4 w-full hover:bg-primary/10"
                href="/about"
              >
                <Info className="h-5 w-5" />
                About
              </Link>

              <Link
                className="flex items-center gap-2 p-4 w-full hover:bg-primary/10"
                href="/contact"
              >
                <Phone className="h-5 w-5" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
