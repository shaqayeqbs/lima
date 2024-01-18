import React from "react";
import Link from "next/link";

function JobItem({ job }) {
  return (
    <div className="border-2 mx-auto max-w-[720px] h-[524px] relative  border-[#30312C] text-center">
      {job?.fori && (
        <div className="absolute w-full bottom-0">
          <img src="/assets/fori.png" />
        </div>
      )}

      {job?.fori && (
        <button
          style={{
            background:
              "linear-gradient(117.19deg, #EBFF00 8.21%, #BEF701 97.04%)",
          }}
          className="absolute w-fit top-7  p-2 px-4 text-black font-extrabold right-5"
        >
          فوری
        </button>
      )}
      <div className="p-16">
        <p className="mb-16 text-[16px]"> {job.location}</p>
        <h2 className="text-[32px] mb-10">{job.title}</h2>

        {job.type.map((item, index) => (
          <p
            key={index}
            className="bg-[#30312B] w-fit mb-10 inline-block mx-1 p-2 px-5 rounded-[8px]"
          >
            {item}
          </p>
        ))}
        <hr className="#30312B w-[60%] mx-auto" />
        <div className="flex  mt-10 justify-between items-center">
          <Link
            href="/payment"
            className="w-fit lg:mx-auto z-50 h-[54px] xl:h-[80px] xl:justify-end gap-[8px] sm:gap-[32px] px-[20px] sm:px-[28px]  lg:mx-0     bg-primary flex justify-center items-center relative"
          >
            <img
              className="relative w-fit h-[11.05px] sm:w-[86.5px] sm:h-[22.09px] ml-[-1.50px]"
              alt="Arrow"
              src="/assets/arrow-1.svg"
            />
            <div className="flex-1  bg-primary font-bold text-[#121212] text-[18px] sm:text-[24px] tracking-[0] leading-[24px] sm:leading-[32px] relative text-right">
              بیشتر
            </div>
          </Link>
          <div className="text-[20px]">
            <p>{job.price}</p>
            <p className="text-[#BDBDBD]">پایه حقوق</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
