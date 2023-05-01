import { Link } from "react-router-dom";
import AttentionButton from "../../components/AttentionButton";

const CTA = () => {
  return (
    <section id="CTA" className="bg-[#E1F3DB]">
      <div className="flex flex-col items-center max-w-6xl gap-8 py-16 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-medium leading-[1.5] md:leading-[1.25] text-center md:text-5xl lg:text-6xl md:text-left lg:leading-[1.15]">
            Worauf warten sie?
          </h1>
          <div className="w-40 h-[2px] bg-black" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Jetzt umweltschonend Stromkosten senken!
          </h2>
        </div>
        <Link to="/contact">
          <AttentionButton text="Kontakt" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
