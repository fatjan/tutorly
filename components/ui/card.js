import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`px-4 py-2 border-b border-gray-200 flex items-center ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
