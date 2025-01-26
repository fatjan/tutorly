import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const LanguageSelectionPage = () => {
  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "Indonesian", flag: "🇮🇩" },
    { name: "Chinese (Mandarin)", flag: "🇨🇳" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "Japanese", flag: "🇯🇵" },
    { name: "French", flag: "🇫🇷" },
    { name: "Korean", flag: "🇰🇷" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto">
        <button className="text-gray-500 mb-6">
          <span className="mr-2">←</span> Back
        </button>
        <h1 className="text-2xl font-bold mb-4">Hi there! What would you like to learn?</h1>
        <div className="space-y-2">
          {languages.map((language, index) => (
            <Card key={index} className="border rounded-md shadow-sm">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{language.flag}</span>
                  <span className="text-lg font-medium">{language.name}</span>
                </div>
                <ChevronRight className="text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>
        <button className="text-blue-500 mt-6">Show all</button>
      </div>
    </div>
  );
};

export default LanguageSelectionPage;
