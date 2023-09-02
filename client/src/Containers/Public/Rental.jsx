import React, { useState, useEffect } from "react";

import { Province, ItemSidebar, RelatePost } from "../../Component";
import { List, Pagination } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { formatVietnameseToString } from "../../Ultils/Common/formatVietnameseToString";

const Rental = () => {
  const { prices, areas, categories } = useSelector((state) => state.app);
  const [categoryCode, setCategoryCode] = useState("none");
  const [categoryCurrent, setCategoryCurrent] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const category = categories?.find(
      (item) => `/${formatVietnameseToString(item.value)}` === location.pathname
    );
    setCategoryCurrent(category);
    if (category) {
      setCategoryCode(category.code);
    }
  }, [location]);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{categoryCurrent?.header}</h1>
        <p className="text-base text-gray-700">{categoryCurrent?.subheader}</p>
      </div>
      <Province />
      <div className="w-full flex gap-2">
        <div className="w-[70%] ">
          <List categoryCode={categoryCode} />
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

export default Rental;
