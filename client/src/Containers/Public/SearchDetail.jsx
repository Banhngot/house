import React from "react";
import { ItemSidebar, RelatePost } from "../../Component";
import { List, Pagination } from "./index";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SearchDetail = () => {
  const { prices, areas } = useSelector((state) => state.app);
  const location = useLocation();

  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">
          {location.state?.titleSearch || "Kết quả tìm kiếm"}
        </h1>
        <p className="text-base text-gray-700">{`${
          location.state?.titleSearch || ""
        }`}</p>
      </div>

      <div className="w-full flex gap-2">
        <div className="w-[70%] ">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSidebar
            isDouble={true}
            type="priceCode"
            content={prices}
            title="Xem theo giá"
          />
          <ItemSidebar
            isDouble={true}
            type="areaCode"
            content={areas}
            title="Xem theo diện tích"
          />
          <RelatePost />
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;
