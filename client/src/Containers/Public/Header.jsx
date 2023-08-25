import React, { useCallback } from "react";
import logo from "../../assests/logo.png";
import { Button } from "../../Component";
import icons from "../../Ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../Ultils/constant";
import Navigation from "./Navigation";

const { AiOutlinePlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);

  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[110px] object-contain"
        />
        <div className="flex items-center gap-1">
          <small>Dreamhouse.com xin chào !</small>
          <Button
            text={"Register"}
            textColor="text-black"
            bgColor="bg-[#FFFD8C]"
            onClick={goLogin}
          />
          <Button
            text={"Login"}
            textColor="text-black"
            bgColor="bg-[#FFFD8C]"
            onClick={goLogin}
          />
          <Button
            text={"Post"}
            textColor="text-black"
            bgColor="bg-[#FFFD8C]"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
