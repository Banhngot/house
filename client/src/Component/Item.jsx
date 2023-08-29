import React, { memo, useState } from "react";
import icons from "../Ultils/icons";

const indexs = [0, 1, 2, 3];
const { IoMdStar, AiFillHeart, AiOutlineHeart, BsBookmarkStarFill } = icons;
const Item = ({
  images,
  user,
  title,
  star,
  description,
  attributes,
  address,
}) => {
  const [isHoverHeart, setHorverHeart] = useState(false);

  return (
    <div className="w-full flex border-t border-orange-600 py-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  key={index}
                  src={i}
                  alt="preview"
                  className="w-[140px] h-[120px] object-cover"
                />
              );
            })}
        <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-3">
          {`${images.length} ảnh`}
        </span>
        <div
          className="text-white absolute right-5 bottom-1"
          onMouseEnter={() => setHorverHeart(true)}
          onMouseLeave={() => setHorverHeart(false)}
        >
          {isHoverHeart ? (
            <AiFillHeart size={26} color="red" />
          ) : (
            <AiOutlineHeart size={26} />
          )}
        </div>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-red-600 font-medium ">
            <IoMdStar className="star-item" size={20} color="yellow" />
            <IoMdStar className="star-item" size={20} color="yellow" />
            <IoMdStar className="star-item" size={20} color="yellow" />
            <IoMdStar className="star-item" size={20} color="yellow" />
            <IoMdStar className="star-item" size={20} color="yellow" />
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <span className="font-bold text-green-600">{attributes?.price}</span>
          <span>{attributes?.acreage}</span>
          <span>{address}</span>
        </div>
        <p className="text-gray-600 w-full h-[50px] whitespace-nowrap text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className="flex items-center">
            <img
              src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              {`Gọi ${user?.phone}`}
            </button>
            <button
              type="button"
              className="text-blue-700 p-1 rounded-md border border-blue-700"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
