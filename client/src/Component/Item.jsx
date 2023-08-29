import React, { memo, useState } from "react";
import icons from "../Ultils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/26/115f909b-c231-43a2-9bb8-52670fcaf3ad_1693058425.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/26/4058ace9-3f73-49f7-9381-ed6bfd1dc66d_1693058341.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/26/162075c5-2225-426b-95f8-ebce773d886c_1693058341.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/26/7131330a-dc00-4434-aef3-aa9d9161570b_1693058346.jpg",
];

const { IoMdStar, AiFillHeart, AiOutlineHeart, BsBookmarkStarFill } = icons;
const Item = () => {
  const [isHoverHeart, setHorverHeart] = useState(false);
  console.log(isHoverHeart);
  return (
    <div className="w-full flex border-t border-orange-600 p-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative">
        <img
          src={images[0]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[1]}
          alt="preview"
          className="w-[140px] h-[120px]  object-cover"
        />
        <img
          src={images[2]}
          alt="preview"
          className="w-[140px] h-[120px]  object-cover"
        />
        <img
          src={images[3]}
          alt="preview"
          className="w-[140px] h-[120px]  object-cover"
        />
        <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-1">
          4 ảnh
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
            Cho thuê căn hộ hoặc văn phòng làm việc
          </div>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <span className="font-bold text-green-600">3.7 triệu/tháng</span>
          <span>28m²</span>
          <span>Quận Tân Bình, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-600">
          Địa chỉ: 60/18A Huỳnh Khương An, p. 15, Gò Vấp.Không gian rộng, có cửa
          sổ.Trang bị giường, nệm và drap mới.Máy lạnh.Nhà vệ sinh riêng.Có bếp…
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className="flex items-center">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flnsel.com%2Ftestimonial%2Fmartin-roberts%2Fanon-avatar%2F&psig=AOvVaw2aTovn1zZ0r_dvK2ncBtkX&ust=1693329424439000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCBu-jt_4ADFQAAAAAdAAAAABAR"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p>Tuệ Thu</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              Gọi 42342342423
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
