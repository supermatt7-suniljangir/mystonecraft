import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";
const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:w-5/6 md:w-full lg:w-3/4  mx-auto p-4 -mt-16 z-50 relative">
      {/* Call Now Card */}
      <Card className="w-full shadow-2xl rounded-none py-4">
        <CardHeader className="text-center">
          <Phone className="w-8 h-8 mx-auto mb-2" />
          <CardTitle>Call Now</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            We are available 24/7 to answer your queries and provide you with
            the best service.
          </p>

          <Link href={`tel`} className="mx-auto text-center mb-4 block">
            <p className="text-sm">Call Now</p>
            <Link href="tel:+919999999999" className="font-semibold text-lg">
              +919999999999
            </Link>
          </Link>

          <Button variant="default" className="w-full">
            <Link href="tel:+919999999999">Call Now</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Visit Us Card */}
      <Card className="w-full shadow-2xl rounded-none py-4">
        <CardHeader className="text-center">
          <MapPin className="w-8 h-8 mx-auto mb-2" />
          <CardTitle>Visit Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Come visit us in person and check out our wonderful designs.
          </p>

          <p className="text-sm mb-6">
            H.no. 5-4, Shankarpalli Rd, beside Q farm, near by IBS campus,
            Donthenpalle, Hyderabad, Telangana 501203, India
          </p>
          <Link
            href={`https://www.google.com/maps?ll=17.420017,78.229036&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=5709170577501979575`}
            target="_blank"
          >
            <Button variant="default" className="w-full">
              Visit
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCards;
