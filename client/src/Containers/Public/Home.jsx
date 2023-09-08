import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Intro, Contact } from "../../Component";
import * as actions from "../../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCurrent } from "../../Service/user";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchCurrent = async () => {
      const response = await apiGetCurrent();
      console.log(response);
    };
    isLoggedIn && fetchCurrent();
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
  }, []);
  return (
    <div className="w-full flex gap-6 flex-col items-center h-ful">
      <Header />
      <Navigation />
      {isLoggedIn && <Search />}
      <div className="w-[75%]   flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
