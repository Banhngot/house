import React from "react";
import { text } from "../../Ultils/constant";
import { Province } from "../../Component";
import { List, Pagination } from "./index";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [params] = useSearchParams();

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
        <div className="w-[30%] border border-green-600">Sidebar</div>
      </div>
    </div>
  );
};

export default HomePage;
