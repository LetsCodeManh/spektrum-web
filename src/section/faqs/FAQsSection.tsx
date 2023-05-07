import { useState } from "react";
import faqs from "./FAQsData";
import SectionHeader from "../../components/SectionHeader";
import FAQsCard from "../../components/FAQsCard";
import AngleBackground from "../../components/AngleBackground";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="relative flex flex-col items-center max-w-6xl gap-6 mx-auto my-32">
      <SectionHeader text="FAQs" />
      <div className="relative grid gap-4 px-4 md:grid-cols-2 md:px-8">
        <AngleBackground />
        {faqs.map((faq, index) => (
          <FAQsCard index={index} key={index} answer={faq.answer} question={faq.question} handleClick={handleClick} openIndex={openIndex}/>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
