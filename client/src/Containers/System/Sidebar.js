import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="w-[256px] flex-none p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 shadow-md border-white"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">{currentData?.name}</span>
            <span>{currentData?.phone}</span>
          </div>
        </div>
        <span>
          Mã thành viên:
          <small className="font-medium">
            {currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}
          </small>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
