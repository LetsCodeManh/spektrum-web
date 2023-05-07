import { useState } from "react";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsShape } from "../SurveyData";

type SurveyData = {
  RoofShape: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step4Shape = ({ RoofShape, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(RoofShape);

  return (
    <SurveyWrapper title="Welche Dachform hat das Haus?">
      <SurveyRadioButton
        options={optionsShape}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ RoofShape: value });
        }}
      />
    </SurveyWrapper>
  );
};

export default Step4Shape;
