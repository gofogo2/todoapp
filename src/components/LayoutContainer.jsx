import React from "react";

const LayoutContainer = ({children}) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-slate-600 to-slate-800">
      <div className="bg-[#24253F] w-[20rem] h-[20rem] rounded-2xl flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
