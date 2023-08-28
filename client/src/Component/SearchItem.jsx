import React, { memo } from "react";

const SearchItem = ({ IconBefore, IconAfter, text, fontWeigh }) => {
  return (
    <div className="bg-white py-2 px-4 w-full rounded-sm text-gray-400 text-sm flex items-center justify-between">
      <div className="flex items-center gap-1 w-full">
        {IconBefore}
        <span
          className={`${
            fontWeigh && "font-medium text-black"
          } w-100 overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {text}
        </span>
      </div>
      {IconAfter}
    </div>
  );
};

export default memo(SearchItem);
