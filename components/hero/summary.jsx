import React from "react";
import { useReducer } from "react";
import { motion, useAnimationControls } from "framer-motion";
const Summary = ({ property1, frameClassName }) => {
  const anim = useAnimationControls();
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "frame-626125",
  });

  return (
    <div
      className="relative !bg-[url(/assets/dot.png)] bg-repeat 
       border-borderColor block lg:flex flex-col items-center gap-[8px] h-[900px] justify-center"
      onMouseEnter={() => {
        dispatch("click");
        anim.start("anim");
      }}
    >
      <hr
        style={{
          border: "none",
          background:
            "linear-gradient(90deg, #1D1D1D 15.56%, rgba(255, 255, 255, .2) 8.83%)",
          width: "2px", // adjust the width as needed
          // adjust the height as needed
          margin: "0",
        }}
        className=" absolute h-full left-[50%] hidden lg:block"
      />
      <div
        className={`lg:w-full  block lg:flex items-center bg-cover h-[900px] justify-end bg-[50%_50%] relative ${
          state.property1 === "frame-626126"
            ? "bg-[url(/image.svg)]"
            : "bg-[url(/frame-626109.svg)]"
        } ${frameClassName}`}
      >
        <motion.div
          animate={anim}
          variants={{
            anim: {
              width: "198px", // Increase width for the animation effect
              opacity: 1, // Make it visible during the animation
            },
          }}
          initial={{ width: 0, opacity: 0 }} // Initial state before animation
          transition={{
            duration: 3,
            type: "spring",
            ease: "backInOut",
          }}
          className={` left-[50%] flex-col items-center top-[73px] hidden lg:block pt-5 gap-[32px] px-[2px] py-0 h-[175px] justify-center bg-[#20211d] absolute ${
            state.property1 === "frame-626125" ? "w-0" : ""
          } ${state.property1 === "frame-626126" ? "inline-flex" : "flex"} ${
            state.property1 === "frame-626125" ? "overflow-hidden hidden" : ""
          }`}
        >
          <div
            className={`[font-family:'Morabba-UltraLight',Helvetica]  self-stretch tracking-[0] text-[64px] text-[#f7f7f6] font-light text-center leading-[64px] relative ${
              state.property1 === "frame-626125" ? "mt-[-10.50px]" : ""
            } ${state.property1 === "frame-626125" ? "mr-[-2.00px]" : ""} ${
              state.property1 === "frame-626125" ? "ml-[-2.00px]" : ""
            }`}
          >
            +8
          </div>
          <div
            className={`[font-family:'IRANYekan-Regular',Helvetica] w-[194px] tracking-[0.32px] text-[16px] [direction:rtl] text-[#f7f7f6] font-normal text-center leading-[normal] relative ${
              state.property1 === "frame-626125" ? "mr-[-98.50px]" : ""
            } ${state.property1 === "frame-626125" ? "ml-[-98.50px]" : ""}`}
          >
            سال تجربه
          </div>
        </motion.div>

        <div
          className={`flex flex-col items-center grow flex-1 p-[48px] justify-center relative ${
            state.property1 === "frame-626126" ? "gap-[32px]" : "gap-[49px]"
          }`}
        >
          <p className="[font-family:'Morabba-Light',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[74px] lg:text-[108px] text-transparent font-light text-right whitespace-nowrap leading-[108px] relative">
            <span className="text-[#f7f7f6]">76</span>
            <span className="text-[#c2fe01]">,</span>
            <span className="text-[#f7f7f6]">7</span>
          </p>

          <p className="[font-family:'IRANYekan-Regular',Helvetica] mb-10 w-[217px] tracking-[0.40px]  text-[16px] md:text-[20px] [direction:rtl] text-[#f7f7f6] font-normal leading-[normal] relative">
            میلیارد تومان سرمایه جاری در استارت آپ ها
          </p>
        </div>
        <div className=" w-full md:hidden bg relative h-[100px]">
          <hr className="w-[80%]  z-30   mx-auto grad grad-top" />
          <div
            className="absolute opacity-50 z-0 -top-[90%] 
            !grad-all"
            style={{
              width: "100%",
              height: "200px",
              background:
                "radial-gradient(96.39% 46.35% at 50% 48.87%, rgba(90, 103, 48, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, #000 0%, #000 100%), #000",
            }}
          ></div>
        </div>
        <div
          className={`flex flex-col text-[16px] md:text-[20px] items-center grow flex-1 p-[48px] justify-center relative ${
            state.property1 === "frame-626126" ? "gap-[32px]" : "gap-[49px]"
          }`}
        >
          <div className="[font-family:'Morabba-UltraLight',Helvetica] w-fit mt-[-1.00px] tracking-[0]   text-[74px] lg:text-[108px] text-[#f7f7f6] font-light text-right whitespace-nowrap leading-[108px] relative">
            +16
          </div>
          <p className=" text-[16px] md:text-[20px] [font-family:'IRANYekan-Regular',Helvetica] w-[194px] tracking-[0.40px] text-[20px] [direction:rtl] text-[#f7f7f6] font-normal leading-[normal] relative">
            استارتآپ موفق با سرمایه گذاری لیما
          </p>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "frame-626126",
      };
  }

  return state;
}

export default Summary;
