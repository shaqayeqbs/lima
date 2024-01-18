import PropTypes from "prop-types";
import React from "react";
import Image from "next/image";
export const Component = ({
  property1,
  className,
  line = "/assets/line-3.svg",
  img = "/assets/line-4.svg",
  line1 = "/assets/line-5.svg",
  line2 = "/assets/line-6.svg",
  frame = "/assets/frame-58.svg",
  frame1 = "/assets/frame-59.svg",
  frame2 = "/assets/frame-60.svg",
  frame3 = "/assets/frame-61.svg",
  layer = "/assets/layer-1-2.png",
}) => {
  return (
    <div
      className={`w-[624px] h-[694px] overflow-hidden bg-black relative ${className}`}
    >
      <div className="w-[918px] left-[-147px] top-[-204px] h-[918px] rounded-[459px] relative">
        <div className="border-[6px] border-solid border-[#1d1d1d] w-[918px] left-0 top-0 h-[918px] rounded-[459px] absolute">
          <div className="w-[679px] left-[120px] top-[120px] h-[778px] relative">
            <div className="border-[6px] border-solid border-[#1d1d1d] w-[412px] left-[133px] top-[132px] h-[414px] rounded-[206px/207px] absolute" />
            <div className="border-[6px] border-solid border-[#1d1d1d] w-[679px] left-0 top-0 h-[679px] rounded-[339.33px] absolute" />
            <Image
              width={100}
              height={100}
              className="w-[6px] left-[336px] top-[84px] h-[694px] absolute"
              alt="Linee"
              la
              src={
                property1 === "frame-60"
                  ? "/assets/line-3.svg"
                  : property1 === "frame-56"
                  ? line
                  : "assets/image.svg"
              }
            />
            <img
              className="w-[624px] left-[27px] top-[333px] h-[6px] absolute"
              alt="Line"
              src={
                property1 === "frame-60"
                  ? "line-4-3.svg"
                  : property1 === "frame-56"
                  ? img
                  : "line-4-2.svg"
              }
            />
            <img
              className="w-[624px] left-[27px] top-[84px] h-[580px] absolute"
              alt="Line"
              src={
                property1 === "frame-60"
                  ? "line-5-3.svg"
                  : property1 === "frame-56"
                  ? line1
                  : "line-5-2.svg"
              }
            />
            <img
              className="w-[624px] left-[27px] top-[84px] h-[580px] absolute"
              alt="Line"
              src={
                property1 === "frame-60"
                  ? "line-6-3.svg"
                  : property1 === "frame-56"
                  ? line2
                  : "line-6-2.svg"
              }
            />
          </div>
        </div>
        <img
          className={`absolute ${
            property1 === "frame-60" ? "w-[152px]" : "w-[138px]"
          } ${property1 === "frame-60" ? "left-[589px]" : "left-[596px]"} ${
            property1 === "frame-60" ? "top-[219px]" : "top-[226px]"
          } ${property1 === "frame-60" ? "h-[152px]" : "h-[138px]"}`}
          alt="Frame"
          src={
            property1 === "frame-60"
              ? "frame-58-3.svg"
              : property1 === "frame-56"
              ? frame
              : "frame-58-2.svg"
          }
        />
        <img
          className={`absolute ${
            property1 === "frame-59" ? "w-[152px]" : "w-[138px]"
          } ${property1 === "frame-59" ? "left-[174px]" : "left-[181px]"} ${
            property1 === "frame-59" ? "top-[228px]" : "top-[235px]"
          } ${property1 === "frame-59" ? "h-[152px]" : "h-[138px]"}`}
          alt="Frame"
          src={
            property1 === "frame-60"
              ? "frame-59-3.svg"
              : property1 === "frame-56"
              ? frame1
              : "frame-59-2.svg"
          }
        />
        <img
          className="w-[138px] left-[253px] top-[634px] h-[138px] absolute"
          alt="Frame"
          src={
            property1 === "frame-60"
              ? "frame-60-3.svg"
              : property1 === "frame-56"
              ? frame2
              : "frame-60-2.svg"
          }
        />
        <img
          className="w-[138px] left-[535px] top-[687px] h-[138px] absolute"
          alt="Frame"
          src={
            property1 === "frame-60"
              ? "frame-61-3.svg"
              : property1 === "frame-56"
              ? frame3
              : "frame-61-2.svg"
          }
        />
        <div
          className={`absolute ${
            property1 === "frame-60"
              ? "w-[248px]"
              : property1 === "frame-56"
              ? "w-[217px]"
              : "w-[258px]"
          } ${
            property1 === "frame-60"
              ? "left-[335px]"
              : property1 === "frame-56"
              ? "left-[351px]"
              : "left-[331px]"
          } ${
            property1 === "frame-60"
              ? "top-[335px]"
              : property1 === "frame-56"
              ? "top-[351px]"
              : "top-[330px]"
          } ${
            property1 === "frame-56" ? "shadow-[0px_0px_215.9px_#c3fe0199]" : ""
          } ${
            property1 === "frame-60"
              ? "h-[248px]"
              : property1 === "frame-56"
              ? "h-[217px]"
              : "h-[258px]"
          } ${property1 === "frame-56" ? "bg-[#c2fe01]" : ""}`}
        >
          <div
            className={`relative ${
              property1 === "frame-56" ? "inline-flex" : ""
            } ${property1 === "frame-56" ? "left-[45px]" : ""} ${
              property1 === "frame-56" ? "flex-col" : ""
            } ${property1 === "frame-56" ? "items-end" : ""} ${
              property1 === "frame-56" ? "top-[76px]" : ""
            } ${property1 === "frame-56" ? "gap-[4px]" : ""} ${
              property1 === "frame-59"
                ? "h-[258px]"
                : property1 === "frame-60"
                ? "h-[248px]"
                : ""
            }`}
          >
            {["frame-59", "frame-60"].includes(property1) && (
              <>
                <div
                  className={`w-[217px] h-[217px] bg-[#c2fe01] shadow-[0px_0px_215.9px_#c3fe0199] ${
                    property1 === "frame-60"
                      ? "!absolute !rotate-[-171.04deg] !left-[16px] !top-[16px]"
                      : "!absolute !rotate-[77.81deg] !left-[20px] !top-[20px]"
                  }`}
                />
                <div
                  className={`inline-flex flex-col items-end gap-[4px] absolute ${
                    property1 === "frame-60" ? "left-[61px]" : "left-[65px]"
                  } ${property1 === "frame-60" ? "top-[91px]" : "top-[96px]"}`}
                >
                  <img
                    className="w-[126px] mt-[-0.50px] mr-[-0.50px] h-[40.12px] relative"
                    alt="Layer"
                    src={property1 === "frame-60" ? "layer-1.png" : "image.png"}
                  />
                  <div className="[font-family:'Morabba-ExtraBold',Helvetica] w-[126.17px] tracking-[0.38px] text-[19px] [direction:rtl] text-black h-[23.03px] font-extrabold text-center whitespace-nowrap leading-[22.8px] relative">
                    هولدینگ لـیـمـا
                  </div>
                </div>
              </>
            )}

            {property1 === "frame-56" && (
              <>
                <img
                  className="relative w-[126px] h-[40.12px] mt-[-0.50px] mr-[-0.50px]"
                  alt="Layer"
                  src={layer}
                />
                <div className="relative w-[126.17px] h-[23.03px] [font-family:'Morabba-ExtraBold',Helvetica] font-extrabold text-black text-[19px] text-center tracking-[0.38px] leading-[22.8px] whitespace-nowrap [direction:rtl]">
                  هولدینگ لـیـمـا
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-60", "frame-56", "frame-59"]),
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  frame: PropTypes.string,
  frame1: PropTypes.string,
  frame2: PropTypes.string,
  frame3: PropTypes.string,
  layer: PropTypes.string,
};
