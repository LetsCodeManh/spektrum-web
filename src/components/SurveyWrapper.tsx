import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const SurveyWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-center md:text-xl lg:text-2xl">{title}</h3>
      <div>{children}</div>
    </>
  );
};

export default SurveyWrapper;
