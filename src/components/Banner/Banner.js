import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto flex">
      <div className="left-side bg-slate-100 w-1/2 h-40">
        <div className="mx-auto pt-5">
          <p className="text-3xl">BE SMART</p>
          <p className="text-xl">With</p>
          <p className="text-3xl">Smart Quiz!</p>
        </div>
      </div>
      <div className="right-side w-1/2 h-40">
        <img className="bg-slate-100" src="./img.png" alt="myBanner" />
      </div>
    </div>
  );
};

export default Banner;
