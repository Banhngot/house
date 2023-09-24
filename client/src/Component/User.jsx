import React from "react";
import { useSelector } from "react-redux";
import { blobToBase64 } from "../Ultils/Common/toBase64";

const User = () => {
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="flex items-center gap-2">
      <img
        src={
          blobToBase64(currentData?.avatar) ||
          `https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png`
        }
        alt="avatar"
        className="w-[35px] h-[35px] object-cover rounded-full border-2 shadow-md border-white"
      />
      <div className="flex flex-col ">
        <span>
          Xin chào, <span className="font-semibold">{currentData?.name}</span>
        </span>
        <span>
          Mã tài khoản:
          <span className="font-medium">{`${currentData?.id?.slice(
            0,
            10
          )}...`}</span>
        </span>
      </div>
    </div>
  );
};

export default User;
