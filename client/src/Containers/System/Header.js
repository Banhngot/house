import React from "react";
import { Navigation } from "../Public";

const Header = () => {
  return (
    <div className="w-full flex flex-none h-[40px]">
      <div className="flex justify-center items-center font-bold bg-orange-400 w-[256px] flex-none">
        Dreamhouse.com
      </div>
      <div className="flex-auto">
        <Navigation isAdmin={true} />
      </div>
    </div>
  );
};

export default Header;
