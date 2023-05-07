import SurveyWrapper from "../../../components/SurveyWrapper";
import ZipGerman from "../../../assets/Zip.png";

type SurveyData = {
  Zip: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step9Zip = ({ Zip, updateFields }: SurveyFormProps) => {
  return (
    <SurveyWrapper title="Wo soll die Photovoltaik-Anlage installiert werden">
      <div className="flex items-center gap-8">
        <img
          src={ZipGerman}
          alt="Deutschlandkarte"
          className="w-[300px] lg:w-[450px]"
        />
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col w-full gap-2">
            <input
              type="text"
              value={Zip}
              id="Zip"
              onChange={(e) => updateFields({ Zip: e.target.value })}
              required
              placeholder="Postleitzahl"
              className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
            />
            <label
              htmlFor="Zip"
              className="text-xs italic font-normal text-center opacity-50 md:text-sm"
            >
              (zur Berechnung der Sonneneinstrahlung)
            </label>
          </div>
        </div>
      </div>
    </SurveyWrapper>
  );
};

export default Step9Zip;
