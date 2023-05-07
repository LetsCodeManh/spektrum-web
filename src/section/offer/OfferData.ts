import Offer1 from "../../assets/Offer1.jpg";
import Offer2 from "../../assets/Offer2.jpg";
import Offer3 from "../../assets/Offer3.jpg";

type Offer = {
  header: string;
  benefits: string[];
  image: string;
  affiliate: string;
  button: string;
};

const offers: Offer[] = [
  {
    header: "Photovoltaik-Anlage",
    benefits: [
      "Stomkostensenkung auf 8-12ct/kWh",
      "Klimafreundliche Stromproduktion",
      "Unabhängigkeit von Energieversorgern",
    ],
    image: Offer1,
    affiliate: "#survey",
    button: "Angebot anforden",
  },
  {
    header: "Wärmepumpe",
    benefits: [
      "Unerschöpfliche Energiegewinnung",
      "Nahezu Wartungsfrei",
      "optimale Ergänzung zur PV Anlage",
    ],
    image: Offer2,
    affiliate: "https://www.solar-volt.de/?ref=oE16Wkg-9mbnRD",
    button: "Bald verfügbar",
  },
  {
    header: "Balkonkraftwerk",
    benefits: [
      "Für Einsteiger ohne eigenes Gebäude",
      "Geringe Anschaffungskosten",
      "Einfache Montage & Mobilität",
    ],
    image: Offer3,
    affiliate: "https://www.solar-volt.de/?ref=oE16Wkg-9mbnRD",
    button: "Zum Angebot",
  },
];

export default offers;