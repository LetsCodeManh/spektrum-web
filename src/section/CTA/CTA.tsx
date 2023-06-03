import AttentionButtonBig from "../../components/AttentionButtonBig";

const CTA = () => {
  return (
    <section id="CTA" className="bg-[#E1F3DB]">
      <div className="flex flex-col items-center max-w-6xl gap-12 py-16 mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-medium leading-[1.5] md:leading-[1.25] text-center md:text-5xl lg:text-6xl md:text-left lg:leading-[1.15]">
            Worauf warten sie?
          </h1>
          <div className="w-40 h-[2px] bg-black" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            machen Sie sich unabhängig von steigenden Strompreisen!
          </h2>
        </div>
        <a href="#offer">
          <AttentionButtonBig text="Jetzt Beratung anfordern" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
