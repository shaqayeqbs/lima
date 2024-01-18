"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = ({ property1 }) => {
  const controls = useAnimation();
  const [fWidth, setFWidth] = useState(0);

  useEffect(() => {
    const calculateWidth = () => {
      const width = document.getElementById("plusF")?.offsetWidth || 0;
      setFWidth(width);
      const moveDistance = width * 0.25; // 25% of the width
      controls.set({ x: -moveDistance });
    };

    calculateWidth();
  }, [controls]);

  const handleSeparatorClick = () => {
    controls.start("animate");
  };

  return (
    <div
      id="about"
      className="w-full  bg-primary px-20 lg:h-[900px] justify-center relative"
      onClick={handleSeparatorClick}
    >
      <div className="border-x- border-black/10 bg-opacity-50 relative">
        <div
          style={{ opacity: 0.5 }}
          className="absolute h-[900px] text-center lg:w-[90%] mx-auto  !opacity-30 bg-[url(/assets/dot.png)]"
        >
          <img src="/assets/dot.png" alt="Dot Image" />
        </div>
        <div className="hidden md:block absolute right-[20px] top-[74px]  font-bold text-black text-[24px] tracking-[0.48px] leading-[32px] whitespace-nowrap [direction:rtl]">
          درباره ما
        </div>
        <div className="w-full  flex justify-center items-center text-center  h-[900px] ">
          <div className="hidden lg:block relative border-l-4 border-black/10 h-[900px]  top-0 left-[25%] transform -translate-x-1/2">
            <motion.div
              id="plusF"
              variants={{
                animate: { y: 30, x: fWidth - 31 * fWidth }, // Adjust x value to -fWidth
              }}
              animate={controls}
              initial={{ y: 240, x: 0 }}
              transition={{ duration: 1, delay: 0 }}
              className="text-black absolute -left-2 text-xl cursor-pointer"
              onClick={() => {
                controls.start("moveToFPosition");
              }}
            >
              +
            </motion.div>
            <motion.div
              id="plusF"
              animate={controls}
              initial={{ y: 650, x: 0 }}
              variants={{
                animate: { y: 800, x: fWidth - 31 * fWidth }, // Adjust x value to -fWidth
              }}
              transition={{ duration: 1, delay: 0 }}
              className="text-black absolute -left-2 text-xl"
            >
              +
            </motion.div>
            <motion.div
              variants={{
                animate: { x: -250, opacity: 1, y: -60 },
              }}
              initial={{ opacity: 0, x: -250, y: 10 }}
              transition={{ duration: 1, delay: 3 }}
              animate={controls}
              className="hidden lg:flex flex-col  w-max items-end justify-center gap-[8px] px-[32px] py-[24px] absolute top-[701px] left-10 bg-[#0000001a] overflow-hidden"
              // variants={sectionVariants}
            >
              <motion.div className="relative w-full  ml-[14.00px] [font-family:'IRANYekan-Regular']  font-bold text-black text-[16px] tracking-[0.32px] leading-[normal] [direction:rtl]">
                پشتیبانی همیشگی
                <br />
                ارزش گذاری
              </motion.div>
            </motion.div>
          </div>
          <div className="relative  lg:block  border-l-4 border-black/10 h-[900px] absolute top-0 -left-0 lg:left-[0%] transform -translate-x-1/2">
            <motion.div
              className="text-black md:hidden"
              variants={{
                animate: { y: 30 },
              }}
              animate={controls}
              initial={{ y: 240 }}
              transition={{ duration: 1, delay: 0 }}
            >
              +
            </motion.div>
            <motion.div
              variants={{
                animate: { y: 700 },
              }}
              animate={controls}
              initial={{ y: 500 }}
              transition={{ duration: 1, delay: 0 }}
              className="text-black md:hidden"
            >
              +
            </motion.div>
          </div>
          <div className="relative absolute  lg:hidden   h-[900px]  top-0   left-[50%]  transform -translate-x-1/2">
            <motion.div
              className="text-black text-xl md:hidden"
              variants={{
                animate: { y: 30 },
              }}
              animate={controls}
              initial={{ y: 240 }}
              transition={{ duration: 1, delay: 0 }}
            >
              -
            </motion.div>
            <motion.div
              variants={{
                animate: { y: 700 },
              }}
              animate={controls}
              initial={{ y: 500 }}
              transition={{ duration: 1, delay: 0 }}
              className="text-black text-xl md:hidden"
            >
              -
            </motion.div>
          </div>
          <div className="relative  lg:block  border-l-4 border-black/10 h-[900px] absolute top-0   left-[100%] lg:left-[100%] transform -translate-x-1/2">
            <motion.div
              className="text-black md:hidden"
              variants={{
                animate: { y: 30 },
              }}
              animate={controls}
              initial={{ y: 240 }}
              transition={{ duration: 1, delay: 0 }}
            >
              +
            </motion.div>
            <motion.div
              variants={{
                animate: { y: 700 },
              }}
              animate={controls}
              initial={{ y: 500 }}
              transition={{ duration: 1, delay: 0 }}
              className=" text-black md:hidden"
            >
              +
            </motion.div>
          </div>
          <div className="relative hidden lg:block  border-l-4 border-black/10 h-[900px] absolute top-0 - lg:left-[49.5%] transform -x-1/2">
            <motion.div
              variants={{
                animate: { y: 30 },
              }}
              animate={controls}
              initial={{ y: 240 }}
              transition={{ duration: 1, delay: 0 }}
              className="text-black   absolute -left-2  text-xl"
            >
              -
            </motion.div>
            <motion.div
              variants={{
                animate: { y: 800 },
              }}
              animate={controls}
              initial={{ y: 650 }}
              transition={{ duration: 1, delay: 0 }}
              className="text-black   absolute -left-2  text-xl"
            >
              -
            </motion.div>
          </div>
          <div className="relative hidden lg:block  border-l-4 border-black/10 h-[900px]  top-0 left-[75%] transform -translate-x-1/2">
            <motion.div
              initial={{ y: 240, x: 0 }}
              variants={{
                animate: { y: 30, x: fWidth + 29 * fWidth }, // Adjust x value to -fWidth
              }}
              animate={controls}
              transition={{ duration: 1, delay: 0 }}
              className="text-black text-xl "
            >
              +
            </motion.div>
            <motion.div
              initial={{ y: 650, x: 0 }}
              variants={{
                animate: { y: 800, x: fWidth + 30 * fWidth }, // Adjust x value to -fWidth
              }}
              animate={controls}
              transition={{ duration: 1, delay: 0 }}
              className="text-black   absolute -left-2  text-xl"
            >
              +
            </motion.div>
          </div>

          <motion.div
            className="w-[60%]  flex justify-center items-center mx-auto !text-center  h-[900px] "
            // variants={sectionVariants}
          >
            <div className="  mx-auto  lg:mr-0  min-w-[300px]  lg:!w-[100%]   ">
              <motion.div
                variants={{
                  animate: { scale: 1 },
                }}
                animate={controls}
                initial={{ scale: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <img src="/assets/loc.svg" className="mx-auto mb-8" />
              </motion.div>
              {/* Retained 4 lines */}
              <motion.p
                className="  top-[-14px] left-[-53px]  font-thin text-black text-[32px] md:text-[48px] text-center tracking-[0] leading-[57.6px] [direction:rtl]"
                // variants={sectionVariants}
              >
                قدم به قدم در کنار شماییم تا بیزنسی بی نقص بسازیم
              </motion.p>
              <motion.p
                variants={{
                  animate: { y: 0, opacity: 1 },
                }}
                animate={controls}
                initial={{ y: 200, opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-[16px]     mt-10  font-normal text-[#00000099] text-center leading-[normal] [direction:rtl]"
                // variants={sectionVariants}
              >
                در دنیای پر از ایده‌ها و استارتاپ‌های نوپا، لیما به عنوان یک
                سرمایه‌گذار متمرکز در حوزه استارتاپ‌ها به رشد اقتصادی خود و
                توسعه‌ی استارتاپ‌های واعد در همه حوزه‌ها پرداخته و به دنبال
                نوآوری و تحول است.
              </motion.p>
              <motion.p
                className=" text-[12px] tracking-[0.24px] mt-12 opacity-0 font-normal text-[#00000099] text-center leading-[normal] [direction:rtl]"
                // variants={sectionVariants}
              >
                در دنیای پر از ایده‌ها و استارتاپ‌های نوپا، لیما به عنوان.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
