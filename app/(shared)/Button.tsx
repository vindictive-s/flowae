import React from "react";

type Props = {
  children: React.ReactNode;
  urlPath: React.ReactNode;
};

const Button = ({ children, urlPath }: Props) => {
  return (
    <div className="h-[100px] flex justify-center items-center group">
      <div className="group-hover:p-2 group-active:p-2 duration-200 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="group-hover:p-2 group-active:p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover flex justify-center items-center rounded-full">
          <a
            className="px-6 py-2 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center hover:bg-opacity-70 active:bg-opacity-70 text-wh-100"
            href={`${urlPath}`}
          >
            {children}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Button;
