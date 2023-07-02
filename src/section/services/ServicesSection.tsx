import { useTranslation } from "react-i18next";
import AngleBackground from "../../components/AngleBackground";
import SectionHeader from "../../components/SectionHeader";
import SectionSubHeader from "../../components/SectionSubHeader";
import ServicesCard from "../../components/ServicesCard";
import Text from "../../components/Text";
import services from "./ServicesData";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="relative flex flex-col items-center max-w-6xl gap-4 mx-auto my-32 lg:flex-row"
    >
      <AngleBackground />
      <div className="flex flex-col gap-2 px-4 text-center lg:gap-4 lg:text-left lg:px-8 lg:w-[90%]">
        <SectionHeader text={t("navigation.service")} />
        <SectionSubHeader text={t("servicesSection.headline")} />
        <Text text={t("servicesSection.subheadline")} />
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-8">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            service={t(service.service)}
            description={t(service.description)}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
