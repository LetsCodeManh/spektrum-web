import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const SurveyWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="text-lg font-semibold text-center md:text-xl lg:text-2xl">{title}</h2>
      <div>{children}</div>
    </>
  );
};

export default SurveyWrapper;
