type Header = {
  text: string;
};

const SectionHeader = ({ text }: Header) => {
  return (
    <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">{text}</h2>
  );
};

export default SectionHeader;
