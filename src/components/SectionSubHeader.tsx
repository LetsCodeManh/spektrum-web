type SubHeader = {
  text: string;
};

const SectionSubHeader = ({ text }: SubHeader) => {
  return (
    <h3 className="text-xl font-semibold text-[#66b666] md:text-2xl lg:text-3xl">
      {text}
    </h3>
  );
};

export default SectionSubHeader;
