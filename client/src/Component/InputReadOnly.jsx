import React from "react";

const InputReadOnly = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="font-medium" htmlFor="exactly-address">
        {label}
      </label>
      <input
        id="exactly-address"
        type="text"
        readOnly
        className="border border-gray-300 outline-none rounded-md bg-gray-300 p-2 w-full"
        value={value || ""}
      />
    </div>
  );
};

export default InputReadOnly;