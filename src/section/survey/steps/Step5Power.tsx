import { useState } from "react";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsPower } from "../SurveyData";

type SurveyData = {
  PowerStorage: string;
  next: () => void;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step5Power = ({ PowerStorage, updateFields, next }: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(PowerStorage);

  return (
    <SurveyWrapper title="Möchten Sie die Photovoltaik-Anlage durch einen Stromspeicher ergänzen?">
      <SurveyRadioButton
        options={optionsPower}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ PowerStorage: value });
          next();
        }}
      />
    </SurveyWrapper>
  );
};

export default Step5Power;
