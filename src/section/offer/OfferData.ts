import Photovoltaik from "../../assets/Offer1.jpg";

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
    image: Photovoltaik,
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
    image: Photovoltaik,
    affiliate: "https://www.solar-volt.de/?ref=oE16Wkg-9mbnRD",
    button: "Zum Angebot",
  },
  {
    header: "Balkonkraftwerk",
    benefits: [
      "Für Einsteiger ohne eigenes Gebäude",
      "Geringe Anschaffungskosten",
      "Einfache Montage & Mobilität",
    ],
    image: Photovoltaik,
    affiliate: "https://www.solar-volt.de/?ref=oE16Wkg-9mbnRD",
    button: "Zum Angebot",
  },
];

export default offers;