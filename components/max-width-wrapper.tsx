import * as React from "react";

function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <main className="max-w-3xl mx-auto relative">{children}</main>;
}

export { MaxWidthWrapper };