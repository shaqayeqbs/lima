import React from "react";

function NakhChi() {
  return (
    <div className="relative w-full z-20 xl:inline-flex !px-10  bg-black py-20 text-center md:text-right h-[681px] xl:text-right items-center justify-center xl:gap-[16px] sm:gap-[32px] mr-2  ">
      <div
        className=" w-fit lg:w-full h-screen absolute z-30 -top-20"
        style={{ background: "url(/assets/dot.png) repeat" }}
      ></div>
      <div className="grad-top w-full  absolute -top-0 lg:-top-20 h-[900px] left-0 z-0 "></div>
      <div className=" fixed  left-0 top-0 z-20 h-[1500px] min-h-100vh "></div>

      <div className="absolute left-[30%] md:left-[0%] top-0 mx-auto w-[210px] lg:w-full">
        <img src="/assets/chi-t.png" className="mx-auto " />
      </div>
      <div className="h-full   lg:max-w-[630px] justify-center text-center px-0 z-40 lg:w-min lg:flex lg:flex-col  items-center gap-6">
        <div className="w-full h-10" />
        <h1 className="text-center z-30  text-neutral-100 text-[65px] lg:text-[96px] font-extrabold leading-[2.5rem]">
          نخچی
        </h1>
        <div className="w-full lg:w-[526px] mx-auto z-30 h-[4px] bg-[#1D1D1D]  flex items-center justify-center text-primary text-center relative my-10 mt-20">
          +
        </div>

        <div className="w-full pb-8 z-30">
          <p className="text-neutral-100 text-[10px] md:text-base text-center w-full lg:w-fit max-w-[550px] mx-auto tracking-tight">
            لیما به عنوان سرمایه‌گذار متمرکز در حوزه استارتاپ، به رشد اقتصادی و
            توسعه‌ی استارتاپ‌های واعد متمایز می‌پردازد.
          </p>
        </div>
        <div className=" relative  border-x-4 border-[#1D1D1D]  z-30 justify-center items-center w-full lg:w-[90%] ">
          <div className="absolute -left-3 top-[64%]  mx-auto z-30 h-[4px]  w-[20px]   flex items-center justify-center text-center ">
            +
          </div>
          <div className="absolute -right-3 top-[64%]  mx-auto z-30 h-[4px]  w-[20px]   flex items-center justify-center  text-center ">
            +
          </div>
          <div className="absolute w-full  mx-auto z-30 h-[4px]   flex items-center justify-center  text-center  my-10 top-[44%]">
            <div className="h-[49px] w-[4px] bg-[#1D1D1D]" />
          </div>
          <div className="  ">
            <div className="flex  pb-1 px-10    justify-between items-center gap-2">
              <div className=" text-neutral-100 mb-5 text-[43px] lg:text-[64px] text-center w-full font-extralight font-sans leading-2xl">
                2
              </div>
              <div className="text-right font-sans mb-5   w-full  text-neutral-100 text-[43px] lg:text-[64px] font-extralight font-morabba leading-2xl">
                12.1
              </div>
            </div>

            <div className=" flex justify-between  border-t-4 pt-10 border-[#1D1D1D]  items-center gap-2">
              <div className="text-center w-[70%] text-neutral-100 text-[10px] lg:text-sm  font-normal font-iranyekan tracking-tight">
                سال پشتیبانی مالی مداوم
              </div>
              <div className="text-center w-[70%] text-neutral-100 text-[10px] lg:text-sm font-normal font-iranyekan tracking-tight">
                میلیارد تومان سرمایه کسب شده
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NakhChi;
