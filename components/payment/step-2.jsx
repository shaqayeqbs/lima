import React from "react";

function Step2() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[406px] text-center"
    >
      {/* Course Information */}
      <div className="self-stretch h-[83px] flex-col justify-center items-center gap-8 flex">
        <h1 className="text-center mx-auto w-full text-neutral-200 text-4xl lg:text-[64px] font-bold leading-[83px]">
          دوره آموزشی
        </h1>
      </div>
      <div className="mx-auto my-8 text-center text-neutral-200 text-xl font-normal leading-normal tracking-wide">
        HTML CSS BOOTSTRAP
      </div>
      {/* Personal Information */}
      <div className="flex-col justify-start items-end gap-2">
        {/* Date of Birth */}
        <div className="self-stretch p-4 !bg-[#313131] border-t border-black w-full items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-[26px] justify-between items-end flex">
            <input
              className="w-full bg-transparent outline-none text-right text-base font-normal leading-relaxed"
              placeholder="تاریخ تولد"
            />
          </div>
          <div className="w-6 h-6 relative">
            <img src="/assets/Calendar.svg" alt="icon" />
          </div>
        </div>

        <div className="flex !bg-[#313131]">
          {/* Field of Study */}
          <div className="self-stretch p-4 border-t border-black w-full items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[26px] justify-between items-end flex">
              <select
                dir="rtl"
                className="w-full text-right bg-transparent hover:outline-none outline-none text-base font-normal  leading-relaxed"
              >
                <option value="" disabled selected>
                  رشته تحصیلی
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          {/* Education */}
          <div className="self-stretch p-4 border-l border-t border-black w-full items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[26px] justify-between items-end flex">
              <select
                dir="rtl"
                className="!w-full text-right bg-transparent text-base font-normal outline-none leading-relaxed"
              >
                <option value="" disabled selected>
                  تحصیلات
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <div className="w-6 h-6 relative">
                <img src="/assets/Work.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Residence */}
        <div className="self-stretch p-4 !bg-[#313131] border-t border-black w-full items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-[26px] justify-between items-end flex">
            <select
              dir="rtl"
              className="w-full text-right bg-transparent hover:outline-none outline-none text-base font-normal leading-relaxed"
            >
              <option value="" disabled selected>
                محل سکونت
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="w-6 h-6 relative">
              <img src="/assets/Location.svg" alt="icon" />
            </div>
          </div>
        </div>
      </div>
      {/* Submit Button
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button> */}
    </form>
  );
}

export default Step2;
