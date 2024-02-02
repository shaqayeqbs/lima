"use client";
import React, { useState } from "react";

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState("همه فرصت‌ها");

  const filters = [
    {
      title: "پشتیبانی",
      category: "پشتیبانی",
      bgColor: "black",
      textColor: "white",
    },
    {
      title: "برنامه نویسی و طراحی",
      category: "برنامه نویسی و طراحی",
      bgColor: "black",
      textColor: "white",
    },
    {
      title: "کارآموزی",
      category: "کارآموزی",
      bgColor: "black",
      textColor: "white",
    },
    {
      title: "همه فرصت‌ها",
      category: "همه فرصت‌ها",
      bgColor: "white",
      textColor: "black",
    },
  ];

  return (
    <div className="z-50">
      {filters.map((filter, index) => (
        <button
          key={index}
          onMouseEnter={() => {
            console.log(filter.category);
            setSelectedFilter(filter.category);
          }}
          className={`w-min  lg:w-[212.48px] h-[58px] p-[8px] lg:p-[16px] ${
            selectedFilter == filter.category ? "bg-white" : "bg-black"
          } shadow-inner flex-col justify-center items-center gap-4 lg:gap-8 inline-flex cursor-pointer`}
        >
          <div
            className={`text-right ${
              selectedFilter == filter.category
                ? "text-black !font-extrabold"
                : "text-white"
            } text-[10px] lg:text-base font-medium  leading-normal`}
          >
            {filter.category}
          </div>
        </button>
      ))}
    </div>
  );
}

export default Filter;
