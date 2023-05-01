type SubHeader = {
  text: string;
};

const SectionSubHeader = ({ text }: SubHeader) => {
  return (
    <h2 className="text-xl font-semibold text-[#66b666] md:text-2xl lg:text-3xl">
      {text}
    </h2>
  );
};

export default SectionSubHeader;
