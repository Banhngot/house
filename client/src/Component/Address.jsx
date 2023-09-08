import React from "react";
import { SelectAddress } from "../Component";

const Address = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <SelectAddress label="Tỉnh/Thành phố" />
          <SelectAddress label="Quận/Huyện" />
        </div>
        <input
          value="123"
          type="text"
          readOnly
          className="border border-gray-300 outline-none rounded-md bg-gray-300 p-2 w-full"
        />
      </div>
    </div>
  );
};

export default Address;
