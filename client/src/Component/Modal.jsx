import React, { useState, useEffect } from "react";
import icons from "../Ultils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowMadal, content, name, handleSubmit, queries }) => {
  const [persent1, setPersent1] = useState(0);
  const [persent2, setPersent2] = useState(100);
  const [activedEl, setActivedEl] = useState("");

  useEffect(() => {
    const activedTrackEl = document.getElementById("track-active");
    if (activedTrackEl) {
      if (persent2 <= persent1) {
        activedTrackEl.style.left = `${persent2}%`;
        activedTrackEl.style.right = `${100 - persent1}%`;
      } else {
        activedTrackEl.style.left = `${persent1}%`;
        activedTrackEl.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);

  const handleClickTrack = (e, value) => {
    e.stopPropagation();
    const stackEl = document.getElementById("track");
    const stackRect = stackEl.getBoundingClientRect();
    let persent = value
      ? value
      : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
    if (Math.abs(persent - persent1) <= Math.abs(persent - persent2)) {
      setPersent1(persent);
    } else {
      setPersent2(persent);
    }
  };
  const convert100toTarget = (percent) => {
    // 10% => 1.5
    // 9% => 1.35 * 10 = 14 / 5 = 2 du 4 => 3 * 5 = 15 /10 = 1.5
    // 11% => 1.65 * 10 = 17 / 5 = 3 du 2 => 4 * 5 = 20 / 10 = 2
    return name === "price"
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : name === "area"
      ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
      : 0;
  };
  const convertto100 = (percent) => {
    // 10% => 1.5
    // 9% => 1.35 * 10 = 14 / 5 = 2 du 4 => 3 * 5 = 15 /10 = 1.5
    // 11% => 1.65 * 10 = 17 / 5 = 3 du 2 => 4 * 5 = 20 / 10 = 2
    let target = name === "price" ? 15 : name === "area" ? 90 : 1;
    return Math.floor((percent / target) * 100);
  };
  const getNumbers = (string) =>
    string
      .split(" ")
      .map((item) => +item)
      .filter((item) => !item === false);

  const getNumbersArea = (string) =>
    string
      .split(" ")
      .map((item) => +item.match(/\d+/))
      .filter((item) => item !== 0);

  const handleActive = (code, value) => {
    setActivedEl(code);
    let arrMaxMin =
      name === "price" ? getNumbers(value) : getNumbersArea(value);
    console.log(arrMaxMin);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPersent1(0);
        setPersent2(convertto100(1));
      }
      if (arrMaxMin[0] === 20) {
        setPersent1(0);
        setPersent2(convertto100(20));
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPersent1(100);
        setPersent2(100);
      }
    }

    if (arrMaxMin.length === 2) {
      setPersent1(convertto100(arrMaxMin[0]));
      setPersent2(convertto100(arrMaxMin[1]));
    }
  };

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
        className="w-2/5 bg-white rounded-md"
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
        {(name === "category" || name === "province") && (
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
                    checked={
                      item.code === queries[`${name}Code`] ? true : false
                    }
                    onClick={(e) =>
                      handleSubmit(e, {
                        [name]: item.value,
                        [`${name}Code`]: item.code,
                      })
                    }
                  />
                  <label htmlFor={item.code}>{item.value}</label>
                </span>
              );
            })}
          </div>
        )}
        {(name === "price" || name === "area") && (
          <div className="p-12 py-20">
            <div className="flex flex-col items-center justify-center relative">
              <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-600">
                {persent1 === 100 && persent2 === 100
                  ? `Trên ${convert100toTarget(persent1)} ${
                      name === "price" ? "triệu" : "m2"
                    }`
                  : `Từ ${
                      persent1 <= persent2
                        ? convert100toTarget(persent1)
                        : convert100toTarget(persent2)
                    } - ${
                      persent2 >= persent1
                        ? convert100toTarget(persent2)
                        : convert100toTarget(persent1)
                    } ${name === "price" ? "triệu" : "m2"}`}
              </div>
              <div
                id="track"
                onClick={handleClickTrack}
                className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full"
              ></div>
              <div
                onClick={handleClickTrack}
                id="track-active"
                className="slider-track-active h-[5px] absolute top-0 bottom-0  bg-orange-600 rounded-full"
              ></div>
              <input
                max="100"
                min="0"
                step="1"
                type="range"
                value={persent1}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPersent1(+e.target.value);
                  activedEl && setActivedEl("");
                }}
              />
              <input
                max="100"
                min="0"
                step="1"
                type="range"
                value={persent2}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPersent2(+e.target.value);
                  activedEl && setActivedEl("");
                }}
              />
              <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center ">
                <span
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickTrack(e, 0);
                  }}
                >
                  0
                </span>
                <span
                  className="mr-[-12px] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickTrack(e, 100);
                  }}
                >
                  {name === "price"
                    ? "15 triệu +"
                    : name === "area"
                    ? "Trên 90m2"
                    : ""}
                </span>
              </div>
            </div>
            <div className=" mt-24">
              <h4 className="font-medium mb-4">Chọn nhanh :</h4>
              <div className="flex gap-2  items-center flex-wrap w-full">
                {content?.map((item) => {
                  return (
                    <button
                      key={item.code}
                      onClick={() => handleActive(item.code, item.value)}
                      className={`px-4 py-2 bg-gray-200 rounded-md cursor-pointer ${
                        item.code === activedEl ? "bg-yellow-300 " : ""
                      }`}
                    >
                      {item.value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {(name === "price" || name === "area") && (
          <button
            type="button"
            className="w-full bg-orange-500 py-2 font-medium rounded-bl-md rounded-br-md capitalize"
            // onClick={handleSubmit}
          >
            Xác nhận
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
