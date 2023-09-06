import React, { useCallback, useEffect, useState } from "react";
import { SearchItem, Modal } from "../../Component";
import icons from "../../Ultils/icons";
import { useSelector } from "react-redux";

import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { path } from "../../Ultils/constant";

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
  const [arrMinMax, setArrMinMax] = useState({});
  const [defaultText, setDefaultText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes(path.SEARCH)) {
      setArrMinMax({});
      setQueries({});
    }
  }, [location]);

  const handleShowMadal = (content, name, defaultText) => {
    setName(name);
    setContent(content);
    setDefaultText(defaultText);
    setIsShowMadal(true);
  };

  const handleSubmit = useCallback(
    (e, query, arrMaxMin) => {
      e.stopPropagation();
      setQueries((prev) => ({ ...prev, ...query }));
      setIsShowMadal(false);
      arrMaxMin && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    },
    [isShowModal, queries]
  );

  const handleSearch = () => {
    const queryCodes = Object.entries(queries)
      .filter((item) => item[0].includes("Code"))
      .filter((item) => item[1]);
    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
      const queryText = Object.entries(queries).filter(
        (item) => !item[0].includes("Code")
      );
      console.log(queryText);
      let queryTextObj = [];
      queryText.forEach((item) => {
        queryTextObj[item[0]] = item[1];
      });
      console.log(queryTextObj);
      let titleSearch = `${
        queryTextObj.category ? queryTextObj.category : "Cho thuê tất cả"
      } ${queryTextObj.province ? `tỉnh ${queryTextObj.province}` : ""} ${
        queryTextObj.price ? `giá ${queryTextObj.price}` : ""
      } ${queryTextObj.area ? `diện tích ${queryTextObj.area}` : ""}`;

      navigate(
        {
          pathname: path.SEARCH,
          search: createSearchParams(queryCodesObj).toString(),
        },
        { state: { titleSearch } }
      );
    });
    // console.log(queryCodesObj);
  };
  return (
    <>
      <div className=" p-[10px] w-[65%] my-3 bg-[#EE7621] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() =>
            handleShowMadal(categories, "category", "Tìm kiếm tất cả")
          }
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<BsFillHouseHeartFill />}
            fontWeigh
            text={queries.category}
            defaultText={"Tìm kiếm tất cả"}
          />
        </span>
        <span
          onClick={() => handleShowMadal(provinces, "province", "Địa điểm")}
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
          onClick={() => handleShowMadal(prices, "price", "Giá ")}
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
          onClick={() => handleShowMadal(areas, "area", "Diện tích")}
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
          onClick={handleSearch}
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
          arrMinMax={arrMinMax}
          name={name}
          setIsShowMadal={setIsShowMadal}
          defaultText={defaultText}
        />
      )}
    </>
  );
};

export default Search;
