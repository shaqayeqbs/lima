"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function ContactUs() {
  const controls = useAnimation();

  const handleClick = () => {
    controls.start("animate");
  };
  return (
    <div
      id="contact"
      onClick={handleClick}
      className="w-full relative flex-col flex items-center jusify-center bg-[url(/assets/dot.png)] bg-repeat h-[900px]"
    >
      <div className=" grad-top h-[900px] w-full absolute -z-10" />

      <motion.div
        variants={{
          animate: { y: 0, opacity: 1 },
        }}
        className="absolute top-0"
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        animate={controls}
      >
        <Image src="/assets/phone.svg" alt="phone" width={200} height={200} />
      </motion.div>

      <motion.h1
        initial={{ y: 50 }}
        transition={{ duration: 1 }}
        variants={{
          animate: { y: 150 },
        }}
        animate={controls}
        className=" text-center text-neutral-100 text-3xl lg:text-5xl font-bold leading-[57.60px]"
      >
        با ما در ارتباط باشید
      </motion.h1>
      <motion.form
        variants={{
          animate: { y: 0, opacity: 1 },
        }}
        initial={{ opacity: 0, y: -250 }}
        transition={{ duration: 1 }}
        animate={controls}
        dir="rtl"
        className="relative min-w-[90%] mt-40 lg:min-w-[193px] text-right mx-auto "
      >
        <div className="absolute top-[97px] text-[20px] text-white">+</div>
        <div className="absolute top-[97px] left-0 text-[20px] text-white">
          +
        </div>
        <div className="absolute top-[200px]  text-[20px] text-white">+</div>
        <div className="absolute top-[200px] left-0 text-[20px] text-white">
          +
        </div>
        <div className=" flex  w-full flex-col py-6 border-x-[5.36px]  border-borderColor gap-6 ">
          <div className="flex-col gap-2 flex border-b-[5.36px] p-6  border-borderColor w-full">
            <div className="opacity-80  flex items-end gap-10 inline-flex">
              <div className="text-neutral-500 text-[21.43px] font-normal font-['Vazir FD-WOL'] leading-[34.09px]">
                ایمیل
              </div>
            </div>
          </div>

          <div className="flex-col gap-2 flex  border-b-[5.36px] p-6 border-borderColor">
            <div className="opacity-80 flex items-end gap-10 inline-flex">
              <div className="text-neutral-500 text-[21.43px] font-normal font-['Vazir FD-WOL'] leading-[34.09px]">
                نام شما
              </div>
            </div>
          </div>

          <div className="flex-col gap-2 flex  p-6 border-borderColor">
            <div className="opacity-80 flex items-start gap-10 inline-flex">
              <div className="text-neutral-500 text-[21.43px] font-normal font-['Vazir FD-WOL'] leading-[34.09px]">
                پیام خود را بنویسید
              </div>
            </div>
          </div>
          <div className="hiddedn lg:block lg:w-[507.57px] h-[21.43px] relative origin-top-left rotate-180">
            {/* Your rotated border elements here */}
          </div>
        </div>
        <div className="w-full  mt-10 h-[85px]  items-center justify-end gap-[8px] sm:gap-[32px] px-[10px] sm:px-[40px] py-0 bg-[url(/assets/dot.png)]  bg-borderColor bg-cover  flex relative">
          <div className="flex-1 text-primary [font-family:'IRANYekan-Bold',Helvetica] font-bold text-[#121212] text-[18px] sm:text-[24px] tracking-[0] leading-[24px] sm:leading-[32px] relative [direction:rtl]">
            ارسال پیام
          </div>
          <img
            className="relative text-primary w-[43.25px] h-[11.05px] sm:w-[86.5px] sm:h-[22.09px] ml-[-1.50px]"
            alt="Arrow"
            src="/assets/arrow-1-primary.svg"
          />
        </div>
      </motion.form>
    </div>
  );
}

export default ContactUs;
