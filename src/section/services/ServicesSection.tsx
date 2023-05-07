import AngleBackground from "../../components/AngleBackground";
import SectionHeader from "../../components/SectionHeader";
import SectionSubHeader from "../../components/SectionSubHeader";
import ServicesCard from "../../components/ServicesCard";
import Text from "../../components/Text";
import services from "./ServicesData";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center max-w-6xl gap-4 mx-auto my-32 lg:flex-row"
    >
      <AngleBackground />
      <div className="flex flex-col gap-2 px-4 text-center lg:gap-4 lg:text-left lg:px-8 lg:w-[90%]">
        <SectionHeader text="Services" />
        <SectionSubHeader text="Das bietet Ihre Energiespektrum" />
        <Text
          text="Wir bieten unseren Kundinen Orientierung und helfen bei der
          Vermittlung an passende Fach firmen. Das alles kostenlos &
          unverbindlich!"
        />
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-8">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            service={service.service}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
