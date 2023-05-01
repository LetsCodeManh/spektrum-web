import Beratung from "../../assets/Services1.png";
import Information from "../../assets/Services2.png";
import Vermittlung from "../../assets/Services3.png";

type Service = {
  service: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    service: "Persönliche Beratung",
    description:
      "Unsere Tools, Checklisten und Kundenberater:innen stehen Ihnen jederzeit Beratend zur Verfügung",
    image: Beratung,
  },
  {
    service: "Information",
    description: "Expertenwissen und Tools Alles aus einer Hand!",
    image: Information,
  },
  {
    service: "Vermittlung",
    description:
      "Auf Wunsch vermittlen wir an ausgewählte Fachfirmen, damit Sie ihre Träume verwirklichen können",
    image: Vermittlung,
  },
];

export default services;