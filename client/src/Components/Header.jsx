import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class=" text-white py-6 px-8 sticky top-0 z-50 border-b w-screen bg-opacity-0 firefox:bg-opacity-0 backdrop-filter backdrop-blur-3xl ">
      <div class="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex align-middle justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png"
            className=" w-14 hidden lg:flex"
            alt=""
          />
          <span className=" text-5xl font-extralight text-neutral-200 hidden lg:flex">&nbsp;|&nbsp;</span>
          <div className="flex flex-col mt-2">
          <span className=" text-neutral-300">Operating Systems</span>
          <span className="text-neutral-300 text-xs">Course Based Project</span>
          </div>

          </div>
        </Link>
        <h1 class="text-3xl font-bold hidden lg:flex">
          CPU Scheduling Algorithms Simulations
        </h1>
        <div>
          <h2 className=" font-extrabold">ASFA ✊</h2>
          <p className=" text-xs text-neutral-400 min-w-fit">Team KanyaRashi</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
