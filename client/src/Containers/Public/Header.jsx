import React, { useCallback } from "react";
import logo from "../../assests/logo.png";
import { Button } from "../../Component";
import icons from "../../Ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../Ultils/constant";
// import Navigation from "./Navigation";

const { AiOutlinePlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[110px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          <small>Dreamhouse.com xin chào !</small>
          <Button
            text={"Login"}
            textColor="text-black"
            bgColor="bg-[#FFFD8C]"
            onClick={() => goLogin(false)}
          />
          <Button
            text={"Register"}
            textColor="text-black"
            bgColor="bg-[#FFFD8C]"
            onClick={() => goLogin(true)}
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
