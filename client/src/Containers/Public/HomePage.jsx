import React, { useEffect } from "react";
import { text } from "../../Ultils/constant";
import { Province, ItemSidebar } from "../../Component";
import { List, Pagination } from "./index";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Store/actions";

const HomePage = () => {
  const [params] = useSearchParams();

  const { categories, prices } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
  }, []);
  console.log(prices);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-2">
        <div className="w-[70%] ">
          <List page={params.get("page")} />
          <Pagination page={params.get("page")} />
          <div className="h-[500px]"></div>
        </div>
        <div className="w-[30%] border border-green-600 flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={categories} title="Danh sách cho thuê" />
          <ItemSidebar content={prices} title="Xem theo giá" />
          <ItemSidebar title="Xem theo diện tích" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
