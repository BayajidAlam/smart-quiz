import React from "react";
import img from './img.png'
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
      <div className="right-side w-1/2 h-40 bg-slate-300">
       <img className="w-full h-40" src={img} alt="imgs" />
      </div>
    </div>
  );
};

export default Banner;
