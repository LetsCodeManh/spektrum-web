import { useState } from "react";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsAge } from "../SurveyData";

type SurveyData = {
  Age: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step7Age = ({ Age, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Age);

  return (
    <SurveyWrapper title="Wie alt sind Sie? (Relevant für Finanzierungsoptionen)?">
      <SurveyRadioButton
        options={optionsAge}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ Age: value });
        }}
      />
    </SurveyWrapper>
  );
};

export default Step7Age;
