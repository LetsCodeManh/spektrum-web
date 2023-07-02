import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Nav1.png";
import ProgressBar from "../../components/ProgressBar";
import { useTranslation } from "react-i18next";
import links from "./NavigationData";

interface Language {
  nativeName: string;
}

const lngs = {
  de: { nativeName: "DE" },
  en: { nativeName: "EN" },
};

const NavigationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <ProgressBar />
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto mt-2 p md:px-8">
        <a href="#hero">
          <img src={Logo} alt="Energyspektrum Logo" className="h-12" />
        </a>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl cursor-pointer md:hidden"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>

        <div
          className={`md:flex md:items-center md:gap-6 md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            isOpen ? "top-20" : "top-[-490px]"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex md:items-center md:gap-6 md:pb-0 md:pl-0 md:w-auto">
            {links.map((link, index) => (
              <li
                className="flex items-center justify-center text-xl md:my-0"
                key={index}
              >
                <a
                  href="#services"
                  className="text-sm font-normal md:text-base hover:text-[#66b666] duration-300"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}

            <div className="flex items-center justify-center gap-2 text-sm font-normal md:text-base">
              {Object.keys(lngs).map((lng) => (
                <button
                  className={`hover:text-[#66b666] duration-300 ${
                    i18n.resolvedLanguage === lng ? `text-[#66b666]` : ``
                  }`}
                  type="submit"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng as keyof typeof lngs].nativeName}
                </button>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationSection;
