import React, { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

const Structure = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 w-full pt-12">
      <div className="mt-20 px-4 py-10 md:px-10 w-[90vw]">
        <div className="flex flex-col justify-center items-center gap-24 text-wh-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Structure;
