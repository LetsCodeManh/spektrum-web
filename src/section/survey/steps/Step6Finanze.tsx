import { useState } from "react";
import Something from "../../../assets/Something.svg";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsFinanze } from "../SurveyData";

type SurveyData = {
  Finanze: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step6Finanze = ({ Finanze, updateFields }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(Finanze);

  return (
    <SurveyWrapper title="Welche Finanzierung kommt für Sie in Frage?">
      <SurveyRadioButton
        options={optionsFinanze}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ Finanze: value });
        }}
      />
    </SurveyWrapper>
  );
};

export default Step6Finanze;
