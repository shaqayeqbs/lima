"use client";
import React, { useState } from "react";
import Image from "next/image";
import Main from "./steps/main";
import NakhChi from "./steps/nkh-chi";
import NakhTop from "./steps/nakh-top";
import { animate, motion, useAnimation, useSpring } from "framer-motion";
import Summary from "./summary";

function Hero() {
  const [step, setStep] = useState(1);
  const filipControls = useAnimation();
  const controls = useAnimation();

  const handleHoverStartLeft = () => {
    setStep(2);
    filipControls.start("initial");
    filipControls.start("left");

    controls.start("visible");
    controls.start("hidden");
    controls.start("vl");

    controls.start("initial");
  };

  const handleHoverStartRight = () => {
    setStep(3);
    controls.stop("visible");
    controls.start("initial");
    controls.start("hidden");
    controls.start("vr");
    filipControls.start("initial");
    filipControls.start("right");
  };

  const onAnimationComplete = () => {
    // filipControls.start("initial");
  };

  return (
    <div id="hero" className="lg:border-x-4 border-borderColor lg:mx-20">
      <section className="!py-0 text-center">
        <div className="lg:flex text-center mx-auto !w-full justify-end">
          <div className="relative w-full z-40 lg:items-start text-left hidden xl:flex">
            <div className="absolute z-10  w-full h-full items-center text-center justify-center top-[0%] left-[0%] rounded-full ounded-tl-none ">
              <Image
                layout="fill"
                src="/assets/line.svg"
                className="object-cover z-30 overflow-hidden bg-[black] lg:border-r-4 border-borderColor"
              />
            </div>
            <motion.div
              variants={{
                initial: {
                  borderRadius: "100% 100% 100% 100%",
                  rotate: 100,
                },
                left: {
                  borderRadius: "100% 100% 0% 100%",
                  rotate: -190,
                },
                right: {
                  borderRadius: "100% 0% 100% 100%",
                  rotate: 10,
                },
              }}
              transition={{ duration: 1 }}
              animate={filipControls}
              // onHoverEnd={handleHoverEnd}
              className="absolute w-[213px] z-20  items-center text-center flex justify-center h-[213px] bg-primary top-[20%] left-[34%] rounded-full ounded-tl-none"
            ></motion.div>
            <div className=" z-50 absolute top-[30%] left-[40%]">
              <img
                src="/assets/hero-logo.svg"
                alt="log"
                className="!z-50 "
                initial="initial"
                whileHover="hover"
              />
            </div>
            <motion.div
              variants={{
                initial: {
                  scale: 1,
                  background: "#20211D",
                },
                left: {
                  scale: 1.1,
                  background: "#5A6730",
                },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              animate={filipControls}
              initial="initial"
              onHoverStart={handleHoverStartLeft}
              // onHoverEnd={handleHoverEnd}
              className="absolute w-[138px] z-30  items-center  hover:cursor-pointer  text-center flex justify-center h-[138px] bg-[#20211D] top-[5%] left-[5%] rounded-[24px]"
            >
              <motion.img
                src="/assets/nakhchi.svg"
                alt="log"
                className=""
                initial="initial"
                whileHover="hover"
              />
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  scale: 1,
                  background: "#20211D",
                },
                right: {
                  scale: 1.1,
                  background: "#5A6730",
                },
              }}
              transition={{ duration: 1 }}
              animate={filipControls}
              initial="initial"
              onHoverStart={handleHoverStartRight}
              // onHoverEnd={handleHoverEnd}
              className="absolute w-[138px] z-30  hover:cursor-pointer items-center text-center flex justify-center h-[138px] bg-[#20211D] top-[3%] left-[70%] rounded-[24px]"
            >
              <img
                src="/assets/nakhtop.svg"
                alt="log"
                className=""
                initial="initial"
                whileHover="hover"
              />
            </motion.div>
            <motion.div className="absolute z-30   w-[138px] items-center text-center flex justify-center h-[138px] bg-[#20211D] top-[62%] left-[16%] rounded-[24px] ounded-tl-none ">
              <img src="/assets/left.svg" alt="log" className="" />
            </motion.div>
            <motion.div className="absolute z-30  w-[138px] items-center text-center flex justify-center h-[138px] bg-[#20211D] top-[68%] left-[58%] rounded-[24px] ounded-tl-none ">
              <img src="/assets/right.svg" alt="log" className="" />
            </motion.div>
          </div>
          <div className="w-full relative">
            <motion.div
              variants={{
                hidden: { x: "-100%" },

                vr: { x: 0 },
              }}
              animate={controls}
              transition={{ duration: 1, ease: "easeInOut" }}
              onAnimationComplete={onAnimationComplete}
              className="absolute hidden lg:block w-full z-20"
              initial={{ x: "-100%" }}
              onHoverStart={() => {
                controls.start("hidden");
                controls.start("initial");
                filipControls.start("initial");

                // setStep(1);
              }}
            >
              {step === 3 && <NakhTop />}
            </motion.div>

            <motion.div
              variants={{
                hidden: { x: "-100%" },

                vl: { x: 0 },
              }}
              animate={controls}
              transition={{ duration: 1, ease: "easeInOut" }}
              onAnimationComplete={onAnimationComplete}
              className="absolute  hidden lg:block w-full z-20"
              initial={{ x: "-100%" }}
              onHoverStart={() => {
                controls.start("hidden");
                filipControls.start("initial");
                // setStep(1);
              }}
            >
              {step === 2 && <NakhChi />}
            </motion.div>
            <div className="!mx-auto text-center px-10 lg:px-0 !lg:w-full">
              <Main />
            </div>
          </div>
        </div>
      </section>
      <div className="md:hidden">
        {" "}
        <NakhChi />{" "}
      </div>
      <hr className="!border-borderColor  lg:border-2 " />
      <div className="lg:mx-auto grad ">
        <Summary />
      </div>
    </div>
  );
}

export default Hero;
