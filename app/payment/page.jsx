"use client";
import React, { useState } from "react";
import Headers from "@/components/navigation/main-nav";
import Cadr from "@/components/ui/cadr";
import Step1 from "@/components/payment/user-detail";
import Step2 from "@/components/payment/step-2";
import Step3 from "@/components/payment/rules-and-conditions";
import Step4 from "@/components/payment/price";

function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    // Check if it's the last step
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    // Check if it's the first step
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderActionButton = (
    label,
    background,
    textColor,
    width,
    isNextButton
  ) => (
    <div
      className={`${width} mt-6 h-[58px]   z-50 px-8 py-3 opacity-80 ${background} justify-center items-center gap-2 flex`}
      onClick={() => (isNextButton ? handleNextStep() : handlePrevStep())}
      style={{ cursor: "pointer" }}
    >
      <div
        className={`te text-base font-medium  leading-[33.24px] ${textColor}`}
      >
        {label}
      </div>
    </div>
  );

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative">
        <Headers />
      </div>
      <main className="relative">
        <div className="w-full mt-0 absolute -top-10 bg-[url(/assets/dot.png)] bg-repeat h-screen min-h-100vh z-20"></div>
        <div className="w-full grad-top fixed -top-0 -z-10  h-[1500px] min-h-100vh "></div>
        <Cadr currentStep={currentStep}>
          {renderStepComponent()}

          <div className="max-w-full mx-auto justify-around flex gap-2">
            {renderActionButton(
              "بازگشت",
              "bg-white bg-opacity-10",
              "text-neutral-200",
              "w-1/3  max-w-24",
              false
            )}
            {renderActionButton(
              "شروع پرسشنامه",
              "bg-lime-400",
              "text-black",
              "w-full  max-w-96",
              true
            )}
          </div>
        </Cadr>
      </main>
    </>
  );
}

export default Page;
