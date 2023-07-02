import Beratung from "../../assets/Services1.png";
import Information from "../../assets/Services2.png";
import Vermittlung from "../../assets/Services3.png";

type Service = {
  service: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    service: "servicesSection.servicesOption.first.headline",
    description: "servicesSection.servicesOption.first.text",
    image: Beratung,
  },
  {
    service: "servicesSection.servicesOption.second.headline",
    description: "servicesSection.servicesOption.second.text",
    image: Information,
  },
  {
    service: "servicesSection.servicesOption.third.headline",
    description: "servicesSection.servicesOption.third.text",
    image: Vermittlung,
  },
];

export default services;
