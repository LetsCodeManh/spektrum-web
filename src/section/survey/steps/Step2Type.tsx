import { useState } from "react";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsType } from "../SurveyData";

type SurveyData = {
  Type: string;
  next: () => void;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step2Type = ({ Type, updateFields, next }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Type);

  return (
    <SurveyWrapper title="Um welchen Gebäudetyp handelt es sich?">
      <SurveyRadioButton
        options={optionsType}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ Type: value });
          next();
        }}
      />
    </SurveyWrapper>
  );
};

export default Step2Type;
