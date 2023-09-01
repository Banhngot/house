import React, { memo } from "react";
import { text } from "../Ultils/dataintro";
import icons from "../Ultils/icons";
import { Button } from "../Component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../Ultils/Common/formatVietnameseToString";

const { IoMdStar } = icons;
const star = [1, 2, 3, 4, 5];

const Intro = () => {
  const { categories } = useSelector((state) => state.app);

  return (
    <div className="border  bg-white rounded-md shadow-md p-4 gap-4 flex-col  w-[65%] flex justify-center items-center">
      <h3 className="font-semibold text-lg">{text.title}</h3>
      <p className="text-gray-800 text-center my-4">
        {text.description}
        <span className="text-link">
          {categories?.length > 0 &&
            categories.map((item) => {
              return (
                <Link
                  to={`${formatVietnameseToString(item.value)}`}
                  key={item.code}
                  className="text-blue-600 font-medium hover:text-orange-600"
                >
                  {`${item.value.toLowerCase()}, `}
                </Link>
              );
            })}
        </span>
        {text.description2}
      </p>
      <div className="flex items-center justify-around w-full">
        {text.statistic.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <h4 className="font-semibold text-lg">{item.value}</h4>
              <p className="text-gray-700">{item.name}</p>
            </div>
          );
        })}
      </div>
      <h3 className="font-semibold text-lg p-2">{text.price}</h3>
      <div className="flex items-center justify-center gap-1">
        {star.map((item) => {
          return (
            <span key={item}>
              <IoMdStar color="yellow" size={24} />
            </span>
          );
        })}
      </div>
      <p className="text-gray-800 text-center my-4">{text.comment}</p>
      <span className="text-gray-600">{text.author}</span>
      <h3 className="font-semibold text-lg p-2">{text.question}</h3>
      <p>{text.answer}</p>
      <Button
        text="Truy cập ngay"
        bgColor="bg-secondary2"
        textColor="text-white"
      />
      <div className="h-10"></div>
    </div>
  );
};

export default memo(Intro);
