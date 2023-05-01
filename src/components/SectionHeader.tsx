type Header = {
  text: string;
};

const SectionHeader = ({ text }: Header) => {
  return (
    <h1 className="text-3xl font-medium md:text-4xl lg:text-5xl">{text}</h1>
  );
};

export default SectionHeader;
