import React, { memo } from "react";

const InputForm = ({
  lable,
  value,
  setValue,
  keyPayload,
  invalidFiels,
  setInvalidFiels,
  type,
}) => {
  return (
    <div>
      <lable htlmFor={keyPayload}>{lable}</lable>
      <input
        type={type || "text"}
        id={keyPayload}
        className="outline-none bg-[#e8f0fe] p-2  rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
        }
        onFocus={() => setInvalidFiels([])}
      />
      {invalidFiels.length > 0 &&
        invalidFiels.some((i) => i.name === keyPayload) && (
          <small className="text-red-500 italic">
            {invalidFiels.find((i) => i.name === keyPayload)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(InputForm);
