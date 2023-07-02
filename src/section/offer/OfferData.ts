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
    header: "offerSection.first.headline",
    benefits: [
      "offerSection.first.bulletPoints.first",
      "offerSection.first.bulletPoints.second",
      "offerSection.first.bulletPoints.third",
    ],
    image: Offer1,
    affiliate:
      "https://docs.google.com/forms/d/1A9g9mJ7rB6--3rI5PdjM7cErNVIg6fNhugSpwsIlYCQ/edit",
    button: "offerSection.first.CTA",
  },
  {
    header: "offerSection.second.headline",
    benefits: [
      "offerSection.second.bulletPoints.first",
      "offerSection.second.bulletPoints.second",
      "offerSection.second.bulletPoints.third",
    ],
    image: Offer2,
    affiliate:
      "https://docs.google.com/forms/d/1PyEI01n3eMwVBm8KFG8Pt-fNEPZXDx9lzE0c8sI0f6A/edit",
    button: "offerSection.second.CTA",
  },
  {
    header: "offerSection.third.headline",
    benefits: [
      "offerSection.third.bulletPoints.first",
      "offerSection.third.bulletPoints.second",
      "offerSection.third.bulletPoints.third",
    ],
    image: Offer3,
    affiliate: "https://www.solar-volt.de/?ref=oE16Wkg-9mbnRD",
    button: "offerSection.third.CTA",
  },
];

export default offers;
