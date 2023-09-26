import React, { useCallback, useEffect, useRef, useState } from "react";
import logo2 from "../../assests/logo2.png";
import { Button, User } from "../../Component";
import icons from "../../Ultils/icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../Ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Store/actions";
import menuManage from "../../Ultils/menuManage";
import { FiLogOut } from "react-icons/fi";

const { AiOutlinePlusCircle, AiOutlineDown } = icons;
const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [isShowMenu, setIsShowMenu] = useState();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const headerRef = useRef();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);

  return (
    <div ref={headerRef} className="w-[65%]">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo2}
            alt="logo"
            className="w-[240px] h-[90px] object-cover"
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
            <div className="flex items-center gap-3 relative">
              <User />
              <Button
                text={"Account Management"}
                textColor="text-black"
                bgColor="bg-[#FF9900]"
                px="px-4"
                IcAfter={AiOutlineDown}
                onClick={() => setIsShowMenu((prev) => !prev)}
              />
              {isShowMenu && (
                <div className="absolute min-w-200 top-full bg-white shadow-md rounded-md p-4  right-0 flex flex-col gap-2">
                  {menuManage.map((item) => {
                    return (
                      <Link
                        className="hover:text-orange-500 flex items-center gap-1 text-blue-500 border-b border-gray-200 py-2"
                        key={item.id}
                        to={item?.path}
                      >
                        {item.icon}
                        {item.text}
                      </Link>
                    );
                  })}
                  <span
                    className="cursor-pointer hover:text-orange-500 flex items-center gap-1 text-blue-500  border-gray-500 py-2"
                    onClick={() => {
                      setIsShowMenu(false);
                      dispatch(actions.logout());
                    }}
                  >
                    <FiLogOut />
                    Log out
                  </span>
                </div>
              )}
            </div>
          )}
          <Button
            text={"Post"}
            textColor="text-black"
            bgColor="bg-[#FF9900]"
            IcAfter={AiOutlinePlusCircle}
            onClick={() => navigate("/he-thong/tao-moi-bai-dang")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
