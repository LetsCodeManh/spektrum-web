import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AttentionButton from "./AttentionButton";

type Offer = {
  header: string;
  benefits: string[];
  image: string;
  affiliate: string;
  button: string;
};

const OfferCard = ({ image, header, benefits, affiliate, button, color }: Offer) => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4 overflow-hidden bg-[#FEF9FC] rounded-lg shadow-2xl lg:justify-between hover:scale-[98%] transition-all duration-300 hover:shadow-[#66B666]">
        <img src={image} alt={header} className="object-cover w-full h-64" />
        <div className="flex flex-col items-center gap-2 px-8 text-center lg:items-start lg:text-left">
          <h2 className="text-xl font-semibold text-[#66b666] md:text-2xl">
            {header}
          </h2>
          <ul className="flex flex-col items-center lg:items-start">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm opacity-70"
              >
                <FontAwesomeIcon icon={faCheck} className="text-[#66b666]" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center w-full pt-4 pb-8 lg:justify-start lg:pl-10">
          <a
            href={affiliate}
            target={affiliate !== "#offer" ? "_blank" : "_self"}
          >
            <AttentionButton text={button} color="color" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-[#66B666] rounded-xl -z-10" />
    </div>
  );
};

export default OfferCard;
