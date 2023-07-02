import { Link } from "react-router-dom";
import { footerLinks, socialLinks } from "./FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="text-white bg-black ">
      <div className="flex flex-col items-center max-w-6xl gap-4 py-8 mx-auto md:flex-row md:justify-between md:px-8">
        <p className="text-sm font-normal">
          &#169; {t("footerSection.headline")}
        </p>
        <div className="flex gap-6">
          {footerLinks.map((link, index) => (
            <Link key={index} to={link.href} className="text-sm font-normal">
              {t(link.label)}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 text-white duration-300 rounded-full aspect-square hover:scale-110"
              key={index}
              style={{ backgroundColor: link.color }}
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
