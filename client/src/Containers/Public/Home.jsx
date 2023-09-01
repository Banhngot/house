import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Intro, Contact } from "../../Component";

const Home = () => {
  return (
    <div className="w-full flex gap-4 flex-col items-center h-ful">
      <Header />
      <Navigation />
      <Search />
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
