import React, { useCallback, useEffect, useRef } from "react";
import logo2 from "../../assests/logo2.png";
import { Button } from "../../Component";
import icons from "../../Ultils/icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../Ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Store/actions";

const { AiOutlinePlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { currentData } = useSelector((state) => state.user);
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
            <div className="flex items-center gap-1">
              <small>{currentData.name}</small>
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
