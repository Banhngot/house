import React, { useCallback } from "react";
import logo from "../../assests/logo.png";
import { Button } from "../../Component";
import icons from "../../Ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../Ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Store/actions";

const { AiOutlinePlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  return (
    <div className="w-3/5">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[110px]  object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Dreamhouse.com xin chào !</small>
              <Button
                text={"Login"}
                textColor="text-black"
                bgColor="bg-[#FF9900]"
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Register"}
                textColor="text-black"
                bgColor="bg-[#FF9900]"
                onClick={() => goLogin(true)}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Name !</small>
              <Button
                text={"Logout"}
                textColor="text-black"
                bgColor="bg-[#FF9900]"
                onClick={() => dispatch(actions.logout())}
              />
            </div>
          )}
          <Button
            text={"Post"}
            textColor="text-black"
            bgColor="bg-[#FF9900]"
            IcAfter={AiOutlinePlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
