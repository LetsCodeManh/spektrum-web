import { useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepFrom";

import SurveyData from "./SurveyData";
import Step1Location from "./steps/Step1Location";
import Step2Type from "./steps/Step2Type";
import Step3Owner from "./steps/Step3Owner";
import Step4Shape from "./steps/Step4Shape";
import Step5Power from "./steps/Step5Power";
import Step6Finanze from "./steps/Step6Finanze";
import Step7Age from "./steps/Step7Age";
import Step8When from "./steps/Step8When";
import ContactForm from "./steps/ContactForm";
import SectionHeader from "../../components/SectionHeader";
import AttentionButton from "../../components/AttentionButton";

type FormData = {
  WoPhotovoltaik: string;
  Type: string;
  Living: string;
  Owner: string;
  RoofShape: string;
  PowerStorage: string;
  Finanze: string;
  Age: string;
  When: string;
  vorname: string;
  nachname: string;
  tel: string;
  email: string;
};

const SurveySection = () => {
  const [data, setData] = useState(SurveyData);
  const [showModal, setShowModal] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, step, currentStepIndex, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
      <Step1Location {...data} updateFields={updateFields} next={onSubmit} />,
      <Step2Type {...data} updateFields={updateFields} next={onSubmit} />,
      <Step3Owner {...data} updateFields={updateFields} next={onSubmit} />,
      <Step4Shape {...data} updateFields={updateFields} next={onSubmit} />,
      <Step5Power {...data} updateFields={updateFields} next={onSubmit} />,
      <Step6Finanze {...data} updateFields={updateFields} next={onSubmit} />,
      <Step7Age {...data} updateFields={updateFields} next={onSubmit} />,
      <Step8When {...data} updateFields={updateFields} next={onSubmit} />,
      <ContactForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit() {
    if (!isLastStep) {
      return next();
    }
  }

  return (
    <section
      id="survey"
      className="relative flex flex-col items-center max-w-6xl gap-4 px-4 mx-auto my-16 md:px-8"
    >
      <SectionHeader text="Survey" />
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full gap-8 p-8 overflow-hidden bg-[#FEF9FC] rounded-lg shadow-2xl"
      >
        {step}
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text">{`${Math.round(
            (currentStepIndex / (steps.length - 1)) * 100
          )}%`}</p>
          <div className="flex items-center w-full h-2 overflow-hidden bg-white border border-black rounded-full border-opacity-20">
            <div
              className="bg-[#66B666] h-4 transition-all duration-500 rounded-full"
              style={{
                width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="flex gap-8">
          {isFirstStep && (
            <AttentionButton text="Back" onClick={back} />
          )}
          {isLastStep && (
            <AttentionButton text="Confirm" onClick={next} />
          )}
        </div>
      </form>
      {showModal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-500 bg-opacity-30">
          <div className="fixed flex flex-col gap-4 p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg left-1/2 top-1/2 min-w-[350px] max-w-[400px] z-50">
            <div className="flex items-center gap-2">
              <img className="h-8 aspect-square" />
              <h1 className="text-base font-medium md:text-lg">
                Cookie Notice
              </h1>
            </div>
            <p>
              We use cookies to ensure that we give you the best experience on
              our website.{" "}
              <a href="/" className="text-[#66b666]">
                Read cookies policies.
              </a>
            </p>
            <div className="flex gap-4">
              <button className="h-8 px-4 text-white bg-black rounded-md font-extralight">
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="h-8 px-4 text-white bg-black rounded-md font-extralight"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SurveySection;
