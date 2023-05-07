import { FormEvent, useState } from "react";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsWhen } from "../SurveyData";

type SurveyData = {
  When: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step8When = ({ When, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(When);

  return (
    <SurveyWrapper title="Wann soll die Photovoltaik installiert werden?">
      <SurveyRadioButton
        options={optionsWhen}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ When: value });
        }}
      />
    </SurveyWrapper>
  );
};

export default Step8When;
