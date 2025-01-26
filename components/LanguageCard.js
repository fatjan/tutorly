'use client';

import React from "react";

export const LanguageCard = ({ children }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {children}
    </div>
  );
};

export const LanguageCardContent = ({ children }) => {
  return (
    <div className="p-4">
      {children}
    </div>
  );
};