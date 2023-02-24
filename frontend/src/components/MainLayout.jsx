import React from "react";

export const MainLayout = ({ children }) => {
  return (
    <div className="hero-background px-12">
      <div className="flex flex-col">{children}</div>
    </div>
  );
};
