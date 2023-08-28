import React, { memo } from "react";

const ProvinceBtn = ({ name, image }) => {
  return (
    <div className=" shadow-md rounded-bl-md rounded-br-md">
      <img
        src={image}
        alt="hcm"
        className="w-[190px] h-[100px] object-cover rounded-tl-md  rounded-tr-md"
      />
      <div className="font-medium p-2  text-blue-600 text-center ">{name}</div>
    </div>
  );
};

export default memo(ProvinceBtn);
