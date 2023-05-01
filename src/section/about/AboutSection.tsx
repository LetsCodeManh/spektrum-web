import AboutCard from "../../components/AboutCard";
import SectionHeader from "../../components/SectionHeader";
import about from "./AboutData";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center max-w-6xl gap-6 mx-auto my-16"
    >
      <SectionHeader text="About Us" />
      {about.map((about, index) => (
        <AboutCard
          key={index}
          header={about.header}
          descriptionOne={about.descriptionOne}
          descriptionTwo={about.descriptionTwo}
          image={about.image}
        />
      ))}
    </section>
  );
};

export default AboutSection;
