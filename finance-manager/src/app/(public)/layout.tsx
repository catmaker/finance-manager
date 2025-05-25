import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 w-4/5 m-auto">
      {children}
    </div>
  );
};

export default layout;
