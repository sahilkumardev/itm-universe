import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
  <main className="max-w-screen-2xl mx-auto relative">
    {children}
  </main>
  );
};

export { MaxWidthWrapper };