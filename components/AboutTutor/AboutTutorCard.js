import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import TutorBadges from "@/components/AboutTutor/TutorBadges";
import TutorRefundable from "@/components/AboutTutor/TutorRefundable";
import AboutMe from "@/components/AboutTutor/AboutMe";
import Reviews from "@/components/AboutTutor/Reviews";

const AboutTutorCard = () => {
  return (
    <Card className="w-full border-none p-0">
      <CardHeader className="flex items-center space-x-4 px-4 py-4">
        <img
          src="/avatar-placeholder.png"
          alt="Tutor Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">Nathan Fabrice Ghayibée N.</h2>
          <p className="text-sm text-gray-600">Country of birth Cameroon 🇨🇲</p>
        </div>
      </CardHeader>
      <TutorBadges />
      <TutorRefundable />
      <AboutMe />
      <Reviews />
    </Card>
  );
};

export default AboutTutorCard;
