import React from "react";

function NakhTop() {
  return (
    <div className="relative bg-black z-20 xl:inline-flex !px-10 w-full g-black py-20 text-center md:text-right h-[682px] xl:text-right items-center justify-center xl:gap-[16px] sm:gap-[32px] mr-2  ">
      <div
        className="w-full !h-[900px] absolute z-30 -top-20"
        style={{ background: "url(/assets/dot.png) repeat" }}
      ></div>
      <div className="grad-top w-full h-screen absolute -top-20 h-[900px] left-0 z-0 "></div>
      <div
        style={{
          background:
            "radial-gradient(96.39% 46.35% at 50% 48.87%, rgba(90, 103, 48, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, #000 0%, #000 100%), #000",
        }}
        className=" fixed  left-0 top-0 z-20 h-[1500px] min-h-100vh "
      ></div>

      <div className="absolute top-0 w-full">
        <img src="/assets/nakh-t.png" className="mx-auto" />
      </div>
      <div className="h-full  max-w-[630px] justify-center text-center px-0 z-40 w-min flex flex-col  items-center gap-6">
        <div className="w-full h-10" />
        <h1 className="text-center z-30  text-neutral-100 text-[96px] font-extrabold leading-[2.5rem]">
          نختاپ
        </h1>
        <div className="w-[526px] mx-auto z-30 h-[4px] bg-[#1D1D1D]  flex items-center justify-center text-primary text-center relative my-10 mt-20">
          +
        </div>

        <div className="w-full pb-8 z-30">
          <p className="text-neutral-100 text-base text-center w-fit max-w-[550px] mx-auto tracking-tight">
            در دنیای ایده‌ها و استارتاپ‌های نوپا، لیما به عنوان سرمایه‌گذار
            متمرکز در حوزه استارتاپ، به رشد اقتصادی و توسعه‌ی استارتاپ‌های واعد
            متمایز می‌پردازد.
          </p>
        </div>
        <div className=" relative  border-x-4 border-[#1D1D1D]  z-30 justify-center items-center w-[90%] ">
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
              <div className=" text-neutral-100 mb-5 text-[64px] text-center w-full font-extralight font-sans leading-2xl">
                8
              </div>
              <div className="text-right font-sans mb-5   w-full  text-neutral-100 text-[64px] font-extralight font-morabba leading-2xl">
                47.8
              </div>
            </div>

            <div className=" flex justify-between  border-t-4 pt-10 border-[#1D1D1D]  items-center gap-2">
              <div className="text-center w-[70%] text-neutral-100 text-sm font-normal font-iranyekan tracking-tight">
                میلیارد تومان سرمایه کسب شده
              </div>
              <div className="text-center w-[70%] text-neutral-100 text-sm font-normal font-iranyekan tracking-tight">
                سال پشتیبانی مالی مداوم
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NakhTop;
