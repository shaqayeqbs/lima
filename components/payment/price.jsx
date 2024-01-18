import React, { useState } from "react";

function Price() {
  const [amount, setAmount] = useState(24800); // Default amount
  const minAmount = 200000;
  const maxAmount = 500000;

  const handleSliderChange = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };
  console.log(amount);
  console.log(((amount - minAmount) / (maxAmount - minAmount)) * 100);
  return (
    <div className=" mx-auto relative flex-col   max-w-[438px]  gap-8 w-full">
      <div className="self-stretch h-[83px] flex-col justify-center items-center gap-6 flex">
        <div className="self-stretch h-[83px] flex-col justify-center items-center gap-8 flex">
          <h1 className="text-center text-neutral-200 text-4xl lg:text-[64px] font-bold leading-[83px]">
            هزینه دوره
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="w-full text-center my-8 text-neutral-200 text-xl font-normal leading-normal tracking-wide">
        مبلغ مورد نظر خود را با توجه به توان پرداختی خود وارد کنید
      </div>

      {/* Amount Input and Slider */}
      <div className="self-stretch h-[125px]  w-full flex-col justify-start items-end gap-4 flex">
        {/* Amount Input */}
        <div className="w-full h-14 my-2 px-4 py-[19px] bg-white bg-opacity-10 justify-center items-center gap-2 inline-flex">
          <div className="text-white/80 text-xs font-light">تومان</div>
          <input
            type="number"
            className="text-center text-[white] text-xl font-extrabold  outline-none bg-transparent"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min={minAmount}
            max={maxAmount}
          />
        </div>

        {/* Slider */}
        <div className="!relative mx-auto w-full h-1">
          <div
            className="absolute top-1 left-0 h-1 rounded-l-xl bg-[white]"
            style={{
              width: `${
                ((amount - minAmount) / (maxAmount - minAmount)) * 100
              }%`,
            }}
          ></div>
          <div
            className={`bg-[white] -top-1 -mt-1  flex justify-center text-center rounded-full w-5 h-5 
            ${
              ((amount - minAmount) / (maxAmount - minAmount)) * 100 > 0
                ? "absolute"
                : "absolute"
            }
            `}
            style={{
              left: `${
                ((amount - minAmount) / (maxAmount - minAmount)) * 100 > 0
                  ? ((amount - minAmount) / (maxAmount - minAmount)) * 100
                  : 0
              }%`,
            }}
          >
            <div className="bg-[black]  rounded-full w-3 h-3 flex items-center justify-center m-auto "></div>
          </div>
          <input
            type="range"
            min={minAmount}
            max={maxAmount}
            value={amount}
            onChange={handleSliderChange}
            className="w-full slider h-2 appearance-none opacity-0"
          />
        </div>

        {/* Range Indicator */}
        <div className="self-stretch h-[25px] w flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-white text-base font-medium">{minAmount}</div>
            <div className="text-white text-base font-medium">{maxAmount}</div>
          </div>
        </div>
      </div>

      {/* Agreement Section with Checkbox */}
      <div className="self-stretch  h-[106px]  flex-col justify-end items-end gap-6 flex">
        <div className="self-stretch h-6 justify-end items-center gap-4 inline-flex">
          <div className="text-right text-white text-base font-normal font-['Vazir FD-WOL'] leading-normal">
            شرایط و قوانین را مطالعه کرده ام و تایید میکنم
          </div>
          <input
            type="checkbox"
            className="w-6 h-6 relative checked:bg-zinc-400 checked:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default Price;
