import TypewriterComponent from "typewriter-effect";
import AttentionButton from "../../components/AttentionButton";
import HoverCard from "../../components/HoverCard";

const HomeSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center max-w-6xl gap-4 mx-auto my-16 mt-28 md:flex-row">
      <div className="flex flex-col items-center gap-8 px-4 md:items-start lg:px-8 lg:w-[60%]">
        <h1 className="text-4xl font-medium leading-[1.5] md:leading-[1.25] text-center md:text-5xl lg:text-6xl md:text-left lg:leading-[1.15]">
          Die schnelle & einfache Grünstrom-Lösung für Ihr
          <span className="text-[#66b666]">
            <TypewriterComponent
              options={{
                strings: ["Unternehmen", "Gewerbe", "Eigenheim"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
  
        <a href="#survey">
          <AttentionButton text="zur Lösung"/>
        </a>
      </div>
      <div className="hidden md:flex">
        <HoverCard />
        {/* <img src={theFuck} alt="something" className="hero__image"/> */}
      </div>
    </section>
  );
};

export default HomeSection;
