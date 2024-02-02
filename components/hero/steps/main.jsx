"use client";
import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const Main = () => {
  return (
    <div className="xl:inline-flex  py-20 text-center md:text-right h-[691px] xl:text-right items-center justify-center xl:gap-[16px] sm:gap-[32px] mr-2 sm:mr-10 relative">
      <div className="flex-col w-full xl:w-[532px] items-center sm:items-end gap-[16px] xl:gap-[32px] flex relative">
        <div className="flex-col mx-auto items-center sm:items-end self-stretch w-full sm:w-[532px] flex-[0_0_auto] flex relative">
          <div className="self-stretch mx-auto lg:mx-0  my-2 [font-family:'moraba-Bold'] font-bold text-[#f7f7f6] text-[18px] sm:text-[24px] leading-[74px] sm:leading-[32px] relative ">
            ما، پشت شما هستیم!
          </div>
          <div className="w-[100%] mx-auto  lg:mx-0   xl:w-full xl:self-stretch [font-family:'moraba-Bold'] font-extrabold text-[#f7f7f6] text-[64px] sm:text-[108px] tracking-[20] leading-[74px] sm:leading-[108px] relative [direction:rtl]">
            سرمایه ما،
            <br />
            بــــرتـــری شـماست
          </div>
          <div className="hidden xl:absolute  w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] top-[300px] sm:top-[332px] left-[43px] sm:left-[87px] bg-[#c2fe01] rounded-[6.77px] sm:rounded-[13.53px]" />
        </div>
        <p className="w-[90%]   sm:w-[453px] [font-family:'IRANYekan-Regular',Helvetica]  mx-auto  lg:mx-0  font-normal text-[#f7f7f6] my-3 text-[11px] xl:text-[14px] sm:text-[16px] text-justify tracking-[0.3px] leading-[normal] relative [direction:rtl]">
          در دنیای ایده‌ها و استارتاپ‌های نوپا، لیما به عنوان سرمایه‌گذار متمرکز
          در حوزه استارتاپ، به رشد اقتصادی و توسعه‌ی استارتاپ‌های واعد متمایز
          می‌پردازد.
        </p>
        <div className="w-full mx-auto sm:w-[450px] h-[54px] xl:h-[80px] xl:justify-end gap-[8px] sm:gap-[32px] px-[20px] sm:px-[40px]  lg:mx-0     bg-primary flex justify-center items-center relative">
          <img
            className="relative w-[43.25px] h-[11.05px] sm:w-[86.5px] sm:h-[22.09px] ml-[-1.50px]"
            alt="Arrow"
            src="/assets/arrow-1.svg"
          />
          <div className="flex-1 bg-primary [font-family:'IRANYekan-Bold',Helvetica] font-bold text-[#121212] text-[18px] sm:text-[24px] tracking-[0] leading-[24px] sm:leading-[32px] relative text-right">
            ثبت پروژه
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
