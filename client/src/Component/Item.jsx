import React, { memo, useState } from "react";
import icons from "../Ultils/icons";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../Ultils/Common/formatVietnameseToString";
import { path } from "../Ultils/constant";

const { IoMdStar, AiFillHeart, AiOutlineHeart, BsBookmarkStarFill } = icons;
const Item = ({
  images,
  user,
  title,
  star,
  description,
  attributes,
  address,
  id,
}) => {
  const [isHoverHeart, setHorverHeart] = useState(false);

  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++) {
      stars.push(<IoMdStar className="star-item" size={20} color="yellow" />);
    }
    return stars;
  };

  return (
    <div className="w-full flex border-t border-orange-600 py-4">
      <Link
        to={`${path.DETAIL}${formatVietnameseToString(
          title?.replaceAll("/", "")
        )}/${id}`}
        className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer"
      >
        {images.length > 0 &&
          images
            .filter((i, index) => [...Array(4).keys()].some((i) => i === index))
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
        <span
          className="text-white absolute right-5 bottom-1"
          onMouseEnter={() => setHorverHeart(true)}
          onMouseLeave={() => setHorverHeart(false)}
        >
          {isHoverHeart ? (
            <AiFillHeart size={26} color="red" />
          ) : (
            <AiOutlineHeart size={26} />
          )}
        </span>
      </Link>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <Link
            to={`${path.DETAIL}${formatVietnameseToString(
              title?.replaceAll("/", "")
            )}/${id}`}
            className="text-red-600 font-medium "
          >
            {handleStar(+star).length > 0 &&
              handleStar(star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {title}
          </Link>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-between gap-2">
          <span className="font-bold flex-3 text-green-600 whitespace-nowrap overflow-hidden text-ellipsis">
            {attributes?.price}
          </span>
          <span className="flex-1">{attributes?.acreage}</span>
          <span className="flex-3 whitespace-nowrap overflow-hidden text-ellipsis">{`${
            address.split(",")[address.split(",").length - 2]
          }${address.split(",")[address.split(",").length - 1]}`}</span>
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
            <a
              href={`https://zalo.me/${user?.zalo}`}
              className="text-blue-700 p-1 rounded-md border border-blue-700"
              target="_blank"
            >
              Nhắn Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
