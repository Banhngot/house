import React, { memo } from "react";

const Button = ({
  text,
  textColor,
  bgColor,
  IcAfter,
  onClick,
  fullWidth,
  IcBefore,
}) => {
  return (
    <button
      type="button"
      className={`py-2 px-4 ${textColor} ${bgColor} ${
        fullWidth && "w-full"
      } outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      <span className="text-center">{text}</span>
      {IcBefore && (
        <span>
          <IcBefore />
        </span>
      )}
      {IcAfter && (
        <span>
          <IcAfter />
        </span>
      )}
    </button>
  );
};

export default memo(Button);
