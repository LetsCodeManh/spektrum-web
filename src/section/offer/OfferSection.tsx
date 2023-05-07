import OfferCard from "../../components/OfferCard";
import SectionHeader from "../../components/SectionHeader";
import offers from "./OfferData";

const OfferSection = () => {
  return (
    <section
      id="offer"
      className="flex flex-col items-center max-w-6xl gap-12 px-4 mx-auto my-32 md:px-8"
    >
      <SectionHeader text="Angebot" />
      <div className="grid gap-8 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            image={offer.image}
            header={offer.header}
            benefits={offer.benefits}
            affiliate={offer.affiliate}
            button={offer.button}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
