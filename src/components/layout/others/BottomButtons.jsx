import { Button } from "@/components/ui/button";
import { Milestone, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const BottomButtons = () => {
  return (
    <div className="flex gap-8 justify-center py-10">
      <Link
        target="_blank"
        href={`https://www.google.com/maps?ll=17.420017,78.229036&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=5709170577501979575`}
      >
        <Button
          variant="secondary"
          className="bg-foreground  w-32 rounded-none text-background hover:text-primary"
        >
          <Milestone /> Locate Us
        </Button>
      </Link>
      <a href="tel:+919999999999" className="block">
        <Button
          variant="secondary"
          className="bg-foreground w-32 rounded-none text-background hover:text-primary"
        >
          <Phone className=" h-2 w-2" />
          Call Us
        </Button>
      </a>
    </div>
  );
};

export default BottomButtons;
