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
    header: "aboutSection.first.headline",
    descriptionOne: "aboutSection.first.text.first",
    descriptionTwo: "aboutSection.first.text.second",
    image: Unternehmen,
  },
  {
    header: "aboutSection.second.headline",
    descriptionOne: "aboutSection.second.text",
    image: Vision,
  },
];

export default about;
