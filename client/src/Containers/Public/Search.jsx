import React from "react";
import { SearchItem } from "../../Component";
import icons from "../../Ultils/icons";

const {
  GrFormNext,
  BiLocationPlus,
  BiMoney,
  BiArea,
  BsFillHouseHeartFill,
  BsSearchHeart,
} = icons;
const Search = () => {
  return (
    <div className=" p-[10px] bg-[#EE7621] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
      <SearchItem
        IconBefore={<BsFillHouseHeartFill />}
        fontWeigh
        text="Phòng trọ, nhà trọ"
      />
      <SearchItem
        IconBefore={<BiLocationPlus />}
        IconAfter={<GrFormNext />}
        text="Địa điểm"
      />
      <SearchItem
        IconBefore={<BiMoney />}
        IconAfter={<GrFormNext />}
        text="Giá "
      />
      <SearchItem
        IconBefore={<BiArea />}
        IconAfter={<GrFormNext />}
        text="Diện tích"
      />
      <button
        type="button"
        className="outline-none py-2 px-4 w-full text-sm rounded-sm bg-[#FF9900] flex items-center justify-center gap-2 text-black font-medium"
      >
        <BsSearchHeart />
        Search
      </button>
    </div>
  );
};

export default Search;
