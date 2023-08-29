import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../Service/category";
import { formatVietnameseToString } from "../../Ultils/Common/formatVietnameseToString";

const notActive =
  "hover:bg-[#FFBA86]  px-4 h-full flex items-center bg-bg-[#FF9900]";
const active = "hover:bg-[#FFBA86]  px-4 h-full flex items-center bg-[#FFBA86]";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetCategories();
      if (response?.data.err === 0) {
        setCategories(response.data.response);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full flex justify-center items-center  h-[40px]  bg-[#FF9900] text-white">
      <div className="w-[75%] flex h-full items-center gap-3 text-black text-sm font-medium">
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
                  to={`${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
