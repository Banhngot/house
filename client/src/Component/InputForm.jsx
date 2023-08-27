import React, { memo } from "react";

const InputForm = ({
  lable,
  value,
  setValue,
  type,
  invalidFiels,
  setInvalidFiels,
}) => {
  return (
    <div>
      <lable htlmFor="phone">{lable}</lable>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2  rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [type]: e.target.value }))
        }
        onFocus={() => setInvalidFiels([])}
      />
      {invalidFiels.length > 0 && invalidFiels.some((i) => i.name === type) && (
        <small className="text-red-500 italic">
          {invalidFiels.find((i) => i.name === type)?.message}
        </small>
      )}
    </div>
  );
};

export default memo(InputForm);
