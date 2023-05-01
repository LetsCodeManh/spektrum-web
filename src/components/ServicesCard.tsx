import Text from "./Text";

type Service = {
  service: string;
  description: string;
  image: string;
};

const ServicesCard = ({ image, service, description }: Service) => {
  return (
    <div className="flex items-center shadow-2xl bg-[#fef9fc] gap-4 p-4 rounded-lg">
      <img src={image} alt={service} className="h-16 aspect-square" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium md:text-xl text-[#66b666]">
          {service}
        </h3>
        <Text text={description} />
      </div>
    </div>
  );
};

export default ServicesCard;
