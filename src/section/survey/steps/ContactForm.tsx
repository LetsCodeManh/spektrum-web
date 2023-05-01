import SurveyWrapper from "../../../components/SurveyWrapper";

type SurveyData = {
  vorname: string;
  nachname: string;
  tel: string;
  email: string;
};

type SurveyFormProps = SurveyData & {
  updateFields: (fields: Partial<SurveyData>) => void;
};

const Step11 = ({
  vorname,
  nachname,
  tel,
  email,
  updateFields,
}: SurveyFormProps) => {
  return (
    <SurveyWrapper title="Super! Das wäre geschafft! Bitte hinterlasse uns Deine Kontaktdaten.">
      <div className="flex flex-col gap-4">
        <input
          id="name"
          type="text"
          value={vorname}
          onChange={(e) => updateFields({ vorname: e.target.value })}
          required
          placeholder="Vorname"
          className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
        />

        <input
          id="name"
          type="text"
          value={nachname}
          onChange={(e) => updateFields({ nachname: e.target.value })}
          required
          placeholder="Nachname"
          className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
        />

        <input
          id="tel"
          type="tel"
          defaultValue="+49"
          pattern="\d*"
          value={tel}
          onChange={(e) => updateFields({ tel: e.target.value })}
          placeholder="🇩🇪 +49"
          required
          className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
        />

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          required
          placeholder="E-Mail"
          className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
        />
      </div>
    </SurveyWrapper>
  );
};

export default Step11;
