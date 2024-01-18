import React, { useState } from "react";

const UserDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    nationalCode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for handling form submission (e.g., sending data to backend)
    console.log("Form submitted:", formData);
  };

  return (
    <form
      className="bg-opacity-10 !z-40 flex-col text-center justify-start items-start gap-8 inline-flex"
      onSubmit={handleSubmit}
    >
      <div className="self-stretch flex-col  gap-8">
        <h1 className="text-center text-neutral-200  text-4xl lg:text-[64px] font-bold">
          دوره آموزشی
        </h1>
      </div>
      <div className=" text-center w-full text-neutral-200 text-xl font-normal leading-normal tracking-wide">
        HTML CSS BOOTSTRAP
      </div>
      <div className="self-stretch  flex-col gap-4">
        {renderDetailRow(
          "/assets/Profile.svg",
          "نام شما",
          "w-full",
          "name",
          formData.name
        )}
        {renderDetailRow(
          "/assets/Call.svg",
          "تلفن همراه",
          "w-full border-t border-black",
          "phoneNumber",
          formData.phoneNumber
        )}
        {renderDetailRow(
          "/assets/Message.svg",
          "ایمیل",
          "w-full border-t border-black",
          "email",
          formData.email
        )}
        {renderDetailRow(
          "/assets/Scan.svg",
          "کد ملی",
          "w-full border-t border-black",
          "nationalCode",
          formData.nationalCode
        )}
      </div>
      {/* <div className="w-full relative opacity-50">
        <button
          type="submit"
          className="absolute bottom-0 right-0 mb-4 mr-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div> */}
    </form>
  );
};

const renderDetailRow = (icon, label, className, field, value) => (
  <div
    className={`h-14 p-4 !z-50  !bg-[#313131] ${className} justify-center  items-center gap-2 inline-flex`}
  >
    <div className="!w-full    space-x-4 items-center flex ">
      <div className="w-full">
        <input
          type="text"
          className="border-none h-[26px]  text-right outline-none bg-transparent text-white"
          // value={value}
          onChange={(e) => handleInputChange(field, e.target.value)}
        />
      </div>
      <div className="flex w-fit space-x-4 items-center">
        <div className="grow w-min text-nowrap basis-0 text-right text-white text-base font-normal leading-relaxed">
          {label}
        </div>
        <div className="!w-[19px] h-[19px]">
          <img src={icon} className="w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
);

export default UserDetail;
