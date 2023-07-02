import { useTranslation } from "react-i18next";
import AboutCard from "../../components/AboutCard";
import SectionHeader from "../../components/SectionHeader";
import about from "./AboutData";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative flex flex-col items-center max-w-6xl gap-6 mx-auto my-32"
    >
      <SectionHeader text={t("navigation.about")} />
      {about.map((about, index) => (
        <AboutCard
          key={index}
          header={t(about.header)}
          descriptionOne={t(about.descriptionOne)}
          descriptionTwo={t(about.descriptionTwo)}
          image={about.image}
        />
      ))}
    </section>
  );
};

export default AboutSection;
