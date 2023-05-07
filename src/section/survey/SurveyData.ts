import Something from "../../assets/Something.svg";
import Age1 from "../../assets/Age1.png"
import Age2 from "../../assets/Age2.png"
import Age3 from "../../assets/Age3.png"
import Age4 from "../../assets/Age4.png"

import When1 from "../../assets/When1.png"
import When2 from "../../assets/When2.png"
import When3 from "../../assets/When3.png"
import When4 from "../../assets/When4.png"

import Power1 from "../../assets/Power1.png"
import Power2 from "../../assets/Power2.png"

import Finanze1 from "../../assets/Finanze1.jpg"
import Finanze2 from "../../assets/Finanze2.jpg"
import Finanze3 from "../../assets/Finanze3.png"

import Shape1 from "../../assets/Shape1.jpg"
import Shape2 from "../../assets/Shape2.jpg"
import Shape3 from "../../assets/Shape3.jpg"
import Shape4 from "../../assets/Shape4.jpg"

import Type1 from "../../assets/Type1.png"
import Type2 from "../../assets/Type2.png"
import Type3 from "../../assets/Type3.png"

import Location1 from "../../assets/Location1.jpg"
import Location2 from "../../assets/Type2.png"
import Location3 from "../../assets/Type3.png"
import Location4 from "../../assets/Location4.jpeg"
import Location5 from "../../assets/Location5.jpg"

import Owner1 from "../../assets/Owner1.png"
import Owner2 from "../../assets/Owner2.png"


type FormData = {
  WoPhotovoltaik: string;
  Type: string;
  Living: string;
  Owner: string;
  RoofShape: string;
  PowerStorage: string;
  Finanze: string;
  Age: string;
  When: string;
  Zip: string;
  vorname: string;
  nachname: string;
  tel: string;
  email: string;
};

const SurveyData: FormData = {
  WoPhotovoltaik: "",
  Type: "",
  Living: "",
  Owner: "",
  RoofShape: "",
  PowerStorage: "",
  Finanze: "",
  Age: "",
  When: "",
  Zip: "",
  vorname: "",
  nachname: "",
  tel: "",
  email: "",
};

export default SurveyData;

const optionsLocation = [
  {
    image: Location1,
    text: "Freilandfläche",
    value: "Freilandfläche",
  },
  {
    image: Location2,
    text: "Firmengebäude",
    value: "Firmengebäude",
  },
  {
    image: Location3,
    text: "Mehrfamilienhaus",
    value: "Mehrfamilienhaus",
  },
  {
    image: Location4,
    text: "Ein-/Zweifamilienhaus",
    value: "Ein-/Zweifamilienhaus",
  },
  {
    image: Location5,
    text: "Eigentums-/Mietwohnung",
    value: "Eigentums-/Mietwohnung",
  },
];

const optionsType = [
  {
    image: Type1,
    text: "freistehendes Haus",
    value: "freistehendes Haus",
  },
  {
    image: Type2,
    text: "Fabrikgebäude",
    value: "Fabrikgebäude",
  },
  {
    image: Type3,
    text: "Wohneinheit",
    value: "Wohneinheit",
  },
];

const optionsOwner = [
  {
    image: Owner1,
    text: "Hausbesitzer",
    value: "Hausbesitzer",
  },
  {
    image: Owner2,
    text: "Eigentümergemeinschaft",
    value: "Eigentümergemeinschaft",
  },
];

const optionsShape = [
  {
    image: Shape1,
    text: "Satteldach",
    value: "Satteldach",
  },
  {
    image: Shape2,
    text: "Pultdach",
    value: "Pultdach",
  },
  {
    image: Shape3,
    text: "Flachdach",
    value: "Flachdach",
  },
  {
    image: Shape4,
    text: "Walmdach",
    value: "Walmdach",
  }
];

const optionsPower = [
  {
    image: Power1,
    text: "Ja",
    value: "Ja",
  },
  {
    image: Power2,
    text: "Nein",
    value: "Nein",
  },
];

const optionsFinanze = [
  {
    image: Finanze1,
    text: "Kaufen",
    value: "Kaufen",
  },
  {
    image: Finanze2,
    text: "Mieten",
    value: "Mieten",
  },
  {
    image: Finanze3,
    text: "Beides Interessant",
    value: "Beides Interessant",
  }
]

const optionsAge = [
  {
    image: Age1,
    text: "20-40 Jahre",
    value: "20-40 Jahre",
  },
  {
    image: Age2,
    text: "41-50 Jahre",
    value: "41-50 Jare",
  },
  {
    image: Age3,
    text: "51-70 Jahre",
    value: "51-70 Jahre",
  },
  {
    image: Age4,
    text: "Über 70 Jahre",
    value: "Über 70 Jahre",
  },
]

const optionsWhen = [
  {
    image: When1,
    text: "So schnell wie möglich",
    value: "So schnell wie möglich",
  },
  {
    image: When2,
    text: "1-3 Monate",
    value: "1-3 Monate",
  },
  {
    image: When3,
    text: "4-6 Monate",
    value: "4-6 Monate",
  },
  {
    image: When4,
    text: "Mehr als 6 Monate",
    value: "Mehr als 6 Monate",
  },
]

export { optionsLocation, optionsType, optionsOwner, optionsShape, optionsPower, optionsFinanze, optionsAge, optionsWhen };
