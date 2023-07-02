import { useTranslation } from "react-i18next";
import OfferCard from "../../components/OfferCard";
import SectionHeader from "../../components/SectionHeader";
import offers from "./OfferData";

const OfferSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="offer"
      className="flex flex-col items-center max-w-6xl gap-12 px-4 mx-auto my-32 md:px-8"
    >
      <SectionHeader text={t("navigation.offer")} />
      <div className="grid gap-8 lg:grid-cols-2">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            image={offer.image}
            header={t(offer.header)}
            benefits={offer.benefits.map((benefit) => t(benefit))}
            affiliate={offer.affiliate}
            button={t(offer.button)}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
