import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

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
            feel free to call us anytime from 10:00 AM - 6:00PM, monday to
            saturday
          </p>

          <div className="flex mb-4 justify-around">
            <div>
              <p className="text-sm">For Other Info</p>
              <p className="font-semibold text-lg">+919999999999</p>
            </div>

            <div>
              <p className="text-sm">For Inquiring</p>
              <p className="font-semibold text-lg">+919999999999</p>
            </div>
          </div>

          <Button variant="default" className="w-full">
            Book an appointment
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

          <Button variant="default" className="w-full">
            Directions
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCards;
