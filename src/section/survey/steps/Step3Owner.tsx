import { useState } from "react";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsOwner } from "../SurveyData";

type SurveyData = {
  Owner: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step3Owner = ({ Owner, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Owner);

  return (
    <SurveyWrapper title="Sind Sie Eigentümer der Immobilie?">
      <SurveyRadioButton
        options={optionsOwner}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ Owner: value });
        }}
      />
    </SurveyWrapper>
  );
};

export default Step3Owner;
