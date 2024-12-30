import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@globalstoneart",
    color: "hover:bg-pink-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    handle: "@globalstoneart",
    color: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    handle: "@globalstoneart",
    color: "hover:bg-blue-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    handle: "@globalstoneart",
    color: "hover:bg-blue-700",
  },
];
const SocialSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="shadow-none border-none py-8">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            Follow us on Social Media
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Join our amazing community and stay updated with our latest designs
            and offers!
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 ">
            {socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  className={`w-full h-16 flex items-center justify-center gap-3 transition-all ${social.color} hover:text-background`}
                >
                  <IconComponent className="w-5 h-5" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{social.name}</span>
                    <span className="text-sm">{social.handle}</span>
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialSection;
