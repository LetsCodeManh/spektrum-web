import { useState } from "react";
import SurveyWrapper from "../../../components/SurveyWrapper";
import SurveyRadioButton from "../../../components/SurveyRadioButton";
import { optionsLocation } from "../SurveyData";

type SurveyData = {
  WoPhotovoltaik: string;
  next: () => void;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step1Location = ({
  WoPhotovoltaik,
  updateFields,
  next,
}: SurveyFormProps) => {
  const [selectedValue, setSelectedValue] = useState(WoPhotovoltaik);

  return (
    <SurveyWrapper title="Wo möchten Sie die Photovoltaik installieren?">
      <SurveyRadioButton
        options={optionsLocation}
        selectedValue={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          updateFields({ WoPhotovoltaik: value });
          next();
        }}
      />
    </SurveyWrapper>
  );
};

export default Step1Location;
