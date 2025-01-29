import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import TutorBadges from "@/components/AboutTutor/TutorBadges";
import TutorRefundable from "@/components/AboutTutor/TutorRefundable";
import AboutMe from "@/components/AboutTutor/AboutMe";
import Reviews from "@/components/AboutTutor/Reviews";
import VideoPlayer from "@/components/AboutTutor/VideoPlayer";

const AboutTutorCard = ({ tutor }) => {
  return (
    <Card className="w-full border-none p-0">
      <VideoPlayer src={tutor.videoUrl} />
      <CardHeader className="flex items-center space-x-4 px-4 py-4">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-lg font-bold">{tutor.name}</h2>
          <p className="text-sm text-gray-600">Country of birth {tutor.country} {tutor.countryFlag}</p>
        </div>
      </CardHeader>
      <TutorBadges />
      <TutorRefundable />
      <AboutMe tutor={tutor} />
      <Reviews />
    </Card>
  );
};

export default AboutTutorCard;
