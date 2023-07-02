import TypewriterComponent from "typewriter-effect";
import AttentionButton from "../../components/AttentionButton";
import HoverCard from "../../components/HoverCard";
import { useTranslation } from "react-i18next";

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="flex flex-col items-center max-w-6xl gap-4 mx-auto my-32 mt-28 md:flex-row"
    >
      <div className="flex flex-col items-center gap-8 px-4 md:items-start lg:px-8 lg:w-[60%]">
        <h1 className="text-4xl font-medium leading-[1.5] md:leading-[1.25] text-center md:text-5xl lg:text-6xl md:text-left lg:leading-[1.15]">
          {t("heroSection.headline")}
          <span className="text-[#66b666]">
            <TypewriterComponent
              options={{
                strings: [
                  t("heroSection.headlineOption.first"),
                  t("heroSection.headlineOption.second"),
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <a href="#offer">
          <AttentionButton text={t("heroSection.CTA")} />
        </a>
      </div>
      <div className="hidden md:flex">
        <HoverCard />
      </div>
    </section>
  );
};

export default HomeSection;
