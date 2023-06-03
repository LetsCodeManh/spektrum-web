import { useState } from "react";
import links from "./NavigationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Nav1.png";
import AttentionButton from "../../components/AttentionButton";
import ProgressBar from "../../components/ProgressBar";
import { Link } from "react-router-dom";

const NavigationSection = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <ul className="flex flex-col items-center gap-8 md:flex-row md:flex md:items-center md:gap-6 md:pb-0 md:pl-0 md:w-auto">
            {links.map((link, index) => (
              <li key={index} className="text-xl md:my-0">
                <a
                  href={link.href}
                  className="text-sm font-normal md:text-base hover:text-[#66b666] duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <a href="https://share-eu1.hsforms.com/1Su2qESYwStSMLUigykOzXQfyab0">
              <AttentionButton text="Partner werden" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationSection;
