import React from "react";
import icons from "../Ultils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowMadal, content, name }) => {
  return (
    <div
      onClick={() => {
        setIsShowMadal(false);
      }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowMadal(true);
        }}
        className="w-1/3 bg-white rounded-md"
      >
        <div className="h-[45px] px-4 flex items-center border border-gray-200">
          <span
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowMadal(false);
            }}
          >
            <GrLinkPrevious size={24} />
          </span>
        </div>
        <div className="p-4 flex flex-col">
          {content?.map((item) => {
            return (
              <span
                key={item.code}
                className="py-2 flex gap-2 items-center border-b border-gray-200"
              >
                <input
                  type="radio"
                  name={name}
                  id={item.code}
                  value={item.code}
                />
                <label htmlFor={item.code}>{item.value}</label>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
