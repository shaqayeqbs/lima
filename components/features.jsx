"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const featureData = [
  {
    title: "ارزش گذاری منطقی",
    description:
      "هر چند که لیما فعلاً ارزش‌گذاری خاصی اعلام نکرده است، اما تمرکز بر ارتقاء اقتصادی و نوآوری در استارتاپ‌ها نشان از تعهد به آینده دارد.",
  },
  {
    title: "ارتباط سریع",
    description:
      "لیما در حال حاضر در همه حوزه‌های استارتاپی، به ویژه استارتاپ‌های آنلاین، فعالیت دارد. پروژه‌های مانند 'نخ تاپ'، 'نخ چی' ، 'گرین هوس' و 'پروژه جدید' نمونه‌هایی از استارتاپ‌هایی هستند که لیما به آن‌ها سرمایه‌گذاری کرده است.",
  },
  {
    title: "پشتیبانی فنی",
    description:
      "لیما در حال حاضر در همه حوزه‌های استارتاپی، به ویژه استارتاپ‌های آنلاین، فعالیت دارد. پروژه‌های مانند 'نخ تاپ'، 'نخ چی'، 'گرین هوس' و 'پروژه جدید' نمونه‌هایی از استارتاپ‌هایی هستند که لیما به آن‌ها سرمایه‌گذاری کرده است.",
  },
];

function Features() {
  const controls = useAnimation();

  const handleClick = () => {
    controls.start({
      opacity: 1,
      y: 0,
    });
  };

  return (
    <div
      id="features"
      className={`w-full h-max lg:h-[900px] 
          flex-col justify-center items-center inline-flex`}
      onClick={handleClick}
    >
      {featureData.map((feature, index) => (
        <motion.div
          key={index}
          className="w-full  px-2 lg:h-[300px] py-[0px] border-b-4  border-stone-900  flex-col justify-center items-center gap-2 flex"
          initial={{ opacity: 0, y: -50, zIndex: -10 }}
          animate={controls}
          onClick={handleClick}
          transition={{ duration: 1, delay: 0.2 * index }}
        >
          <motion.div className="w-full  lg:w-[1360px] lg:px-[56px]  hover:bg-[#252525] justify-center items-center gap-4 lg:gap-24  lg:inline-flex lg:flex-row-reverse">
            <motion.div
              className="grow mt-10  !text-center shrink basis-0 lg:text-right text-nowrap [font-family:'moraba-Bold',Helvetica] bg-[r text-neutral-100  text-xl lg:text-5xl font-bold font-['Morabba'] lg:leading-[57.60px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {feature.title}
            </motion.div>
            <motion.div
              className="lg:border-2   h-full lg:h-[300px]  [font-family:'IRANYekan-Regular',Helvetica] border-borderColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div
              className="lg:w-[483px] my-10 text-right text-neutral-100 text-base font-normal font-['IRANYekan'] tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {feature.description}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default Features;
