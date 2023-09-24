import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { formatVietnameseToString } from "../../Ultils/Common/formatVietnameseToString";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Store/actions";
import { path } from "../../Ultils/constant";

const notActive =
  "hover:bg-[#FFBA86]  px-4 h-full flex items-center bg-bg-[#FF9900]";
const active = "hover:bg-[#FFBA86]  px-4 h-full flex items-center bg-[#FFBA86]";

const Navigation = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getCategories());
  }, []);

  return (
    <div
      className={`w-full flex ${
        isAdmin ? "justify-start" : "justify-center"
      }  items-center  h-[40px]  bg-[#FF9900] text-white`}
    >
      <div className="w-[65%] flex h-full items-center gap-3 text-black text-sm font-medium">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex justify-center items-center"
              >
                <NavLink
                  to={`/${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
        <NavLink
          to={path.CONTACT}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Liên hệ
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
