import Fragezeichen from "../assets/FAQs1.png";
import Ausrufezeichen from "../assets/FAQs2.png";
import Text from "./Text";

type FAQs = {
  question: string;
  answer: string;
  index: number;
  openIndex: number | null;
  handleClick: (index: number) => void;
};

const FAQsCard = ({
  question,
  answer,
  index,
  handleClick,
  openIndex,
}: FAQs) => {
  return (
    <div className="flex flex-col gap-2">
      <button
        className="flex items-center justify-between h-20 px-4 py-2 rounded-lg shadow-2xl md:h-28 hover:text-[#66b666] duration-300 bg-[#fef9fc] hover:shadow-none"
        onClick={() => handleClick(index)}
      >
        <h2 className="text-sm font-medium text-left md:text-base">
          {question}
        </h2>
        <img
          src={openIndex === index ? Ausrufezeichen : Fragezeichen}
          alt="answer and question icons"
          className="h-14 aspect-square"
        />
      </button>
      {openIndex === index && (
        <div
          className={`px-4 py-2 rounded-lg shadow-lg bg-[#fef9fc] ${
            openIndex === index ? "max-h-full" : "max-h-0"
          }`}
        >
          <Text text={answer} />
        </div>
      )}
    </div>
  );
};

export default FAQsCard;
