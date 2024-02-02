"use client";
import React from "react";
import Filter from "./filter";
import Jobslist from "./jobslist";

function Jobs() {
  return (
    <>
      <div className="w-full   h-[285px] pb-6 flex-col justify-center items-center gap-12 inline-flex">
        <div className="w-[667.06px] h-[436.36px] relative"></div>
        <h1 className="text-center text-white text-4xl lg:text-[64px] font-bold font-['morabba'] leading-[83px]">
          فرصت‌های همکاری
        </h1>
        <div className="self-stretch w-[90%] lg:w-full mx-auto text-center text-white text-lg lg:text-xl font-normal  leading-normal">
          فرصت‌هایی برای اینکه رویاهای خودتان را در خانواده نختاپ بسازید
        </div>
        <div className="justify-center w-full  text-nowrap items-center inline-flex">
          <Filter />
        </div>
        <Jobslist />
      </div>
    </>
  );
}

export default Jobs;
