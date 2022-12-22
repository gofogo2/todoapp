import React from "react";

const Header = ({ children }) => {
  return (
    <div className="flex-[0.4] bg-[#2f253F] rounded-t-2xl flex flex-row justify-between  items-center px-4">
      {children}
    </div>
  );
};

export default Header;
