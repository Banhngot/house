import React, { useCallback, useState } from "react";
import { SearchItem, Modal } from "../../Component";
import icons from "../../Ultils/icons";
import { useSelector } from "react-redux";
import { getCodePrice, getCodeArea } from "../../Ultils/Common/getCodes";

const {
  GrFormNext,
  BiLocationPlus,
  BiMoney,
  BiArea,
  BsFillHouseHeartFill,
  BsSearchHeart,
} = icons;
const Search = () => {
  const [isShowModal, setIsShowMadal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );
  const [queries, setQueries] = useState({});

  const handleShowMadal = (content, name) => {
    setIsShowMadal(true);
    setName(name);
    setContent(content);
  };

  const handleSubmit = useCallback(
    (e, query) => {
      e.stopPropagation();
      setQueries((prev) => ({ ...prev, ...query }));
      setIsShowMadal(false);
    },
    [isShowModal, queries]
  );
  // console.log(queries);

  return (
    <>
      <div className=" p-[10px] w-[65%] my-3 bg-[#EE7621] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowMadal(categories, "category")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<BsFillHouseHeartFill />}
            fontWeigh
            text={queries.category}
            defaultText={"Phòng trọ, nhà trọ"}
          />
        </span>
        <span
          onClick={() => handleShowMadal(provinces, "province")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<BiLocationPlus />}
            IconAfter={<GrFormNext />}
            text={queries.province}
            defaultText={"Địa điểm"}
          />
        </span>
        <span
          onClick={() => handleShowMadal(prices, "price")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<BiMoney />}
            IconAfter={<GrFormNext />}
            text={queries.price}
            defaultText={"Giá "}
          />
        </span>
        <span
          onClick={() => handleShowMadal(areas, "area")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<BiArea />}
            IconAfter={<GrFormNext />}
            text={queries.area}
            defaultText={"Diện tích"}
          />
        </span>
        <button
          type="button"
          className="outline-none py-2 px-4  text-sm rounded-sm bg-[#FF9900] flex items-center justify-center gap-2 text-black font-medium"
        >
          <BsSearchHeart />
          Search
        </button>
      </div>
      {isShowModal && (
        <Modal
          handleSubmit={handleSubmit}
          queries={queries}
          content={content}
          name={name}
          setIsShowMadal={setIsShowMadal}
        />
      )}
    </>
  );
};

export default Search;
