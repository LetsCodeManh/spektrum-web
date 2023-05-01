import Unternehmen from "../../assets/About1.jpg";
import Vision from "../../assets/About2.png";

type About = {
  header: string;
  descriptionOne: string;
  descriptionTwo?: string;
  image: string;
};

const about: About[] = [
  {
    header: "Unternehmen",
    descriptionOne:
      "Bei Energiespektrum bieten wir einfache und zugängliche Lösungen für die Energieversorgung der Zukunft. Wir verstehen, dass die Umstellung auf erneuerbare Energien für viele Menschen eine Herausforderung darstellen kann und wollen deshalb Lösungen anbieten, die einfach zu verstehen und zu nutzen sind.",
    descriptionTwo:
      "Unser Team setzt sich aus erfahrenen Fachleuten zusammen, die ständig daran arbeiten, innovative Lösungen für unsere Kunden zu entwickeln. Wir bieten individuell angepasste Energiekonzepte, die auf die Bedürfnisse und Ressourcen unserer Kunden abgestimmt sind.",
    image: Unternehmen,
  },
  {
    header: "Vision & Werte",
    descriptionOne:
      "Wir sind überzeugt, dass die Energieversorgung der Zukunft einfach,nachhaltig und zugänglich sein muss. Mit unseren erneuerbaren Energielösungen wollen wir dazu beitragen, die Welt zu einem besseren Ort zu machen.",
    image: Vision,
  },
];

export default about;
