import Text from "./Text";

type About = {
  header: string;
  descriptionOne: string;
  descriptionTwo?: string;
  image: string;
};

const AboutCard = ({
  header,
  descriptionOne,
  descriptionTwo,
  image,
}: About) => {
  return (
    <div className="flex items-center gap-4 px-4 md:px-8 odd:flex-row-reverse">
      <div className="flex flex-col items-center gap-4 text-center md:text-left md:items-start">
        <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">{header}</h2>
        <div className="w-40 h-[2px] bg-[#66b666]" />

        <Text text={descriptionOne} />
        <Text text={descriptionTwo} />
      </div>
      <img src={image} alt={header} className="hidden h-80 lg:flex" />
    </div>
  );
};

export default AboutCard;
