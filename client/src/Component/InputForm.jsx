import React, { memo } from "react";

const InputForm = ({ lable }) => {
  return (
    <div>
      <lable htlmFor="phone">{lable}</lable>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2  rounded-md w-full"
      />
    </div>
  );
};

export default memo(InputForm);
