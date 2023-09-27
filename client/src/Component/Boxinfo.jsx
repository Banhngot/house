import React, { memo } from "react";
import icons from "../Ultils/icons";
import { Button } from "./";

const { GoDotFill, AiFillPhone } = icons;

const Boxinfo = ({ userData }) => {
  return (
    <div className="w-full bg-yellow-400 rounded-md flex flex-col items-center p-4 gap-4">
      <img
        src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
        alt="avatar"
        className="w-16 h-16 object-contain rounded-full"
      />
      <h3 className="font-medium text-xl">{userData?.name}</h3>
      <span className="flex items-center gap-2">
        <GoDotFill color="green" />
        <span>Đang hoạt động</span>
      </span>
      <a
        className="bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-lg"
        href="/"
      >
        <AiFillPhone />
        {userData?.phone}
      </a>
      <a
        className="bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md text-black font-bold text-lg"
        href={`https://zalo.me/{${userData?.zalo}}`}
        target="_blank"
      >
        <AiFillPhone />
        {"Nhắn Zalo"}
      </a>
    </div>
  );
};

export default memo(Boxinfo);
