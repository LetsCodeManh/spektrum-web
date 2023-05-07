import FooterSection from "../section/footer/FooterSection";
import HeaderNavigation from "../components/HeaderNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ContactPage = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <HeaderNavigation />

      <main className="bg-[#FEF9FC] flex justify-center items-center">
        <section className="flex flex-col w-full max-w-lg gap-4 p-8 mt-32 mb-16 bg-white rounded-lg shadow-2xl md:p-12">
          <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
            Jetzt kostenlos und unverbindlich informieren
          </h1>
          <form action="" className="flex flex-col gap-4">
            <div className="bg-[#EDFFE6] flex flex-col gap-4 rounded-lg px-8 py-4">
              <h2 className="text-sm font-semibold text-center md:text-base">
                Welche Produkte bieten Sie an?
              </h2>
              <button
                className="bg-[#66B666] rounded-md h-16 flex gap-4 justify-center items-center"
                type="button"
                onClick={() => setShowDialog(true)}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-white"
                  size="2x"
                />
                <h2 className="text-base font-semibold text-center text-white md:text-lg lg:text-xl">
                  Produkt auswählen
                </h2>
              </button>
              {showDialog && (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-500 bg-opacity-30">
                  <div className="fixed flex flex-col gap-4 p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg left-1/2 top-1/2 min-w-[350px] max-w-[400px] z-50">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-sm font-semibold md:text-base">
                        Wählen Sie jetzt Ihre Produkte aus, die Sie auf
                        Energiespektrum anbieten möchten
                      </h2>
                      <button onClick={() => setShowDialog(false)}>
                        <FontAwesomeIcon icon={faClose} size="2x" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          id="solaranlagen"
                          name="products"
                          className="w-4 h-4"
                        />
                        <label htmlFor="solaranlagen">Solaranlagen</label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          id="solarspeicher"
                          name="products"
                          className="w-4 h-4"
                        />
                        <label htmlFor="solarspeicher">Solarspeicher</label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          id="balkonkraftwerke"
                          name="products"
                          className="w-4 h-4"
                        />
                        <label htmlFor="balkonkraftwerke">
                          Balkonkraftwerke
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          id="wärmepumpe"
                          name="products"
                          className="w-4 h-4"
                        />
                        <label htmlFor="wärmepumpe">Wärmepumpe</label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          id="sonstiges"
                          name="products"
                          className="w-4 h-4"
                        />
                        <label htmlFor="sonstiges">Sonstiges</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <h2 className="text-sm font-semibold md:text-base">
              Ansperechpartner aus Ihrem Unternehmen
            </h2>
            <div className="flex flex-col gap-2">
              <input
                id="name"
                type="text"
                required
                placeholder="Unternehmen"
                className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
              />
              <div className="grid w-full grid-flow-col gap-2">
                <select className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666] appearance-none">
                  <option selected>Anrede</option>
                  <option value="woman">Frau</option>
                  <option value="man">Herr</option>
                </select>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Nachname"
                  className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
                />
              </div>

              <input
                id="name"
                type="email"
                required
                placeholder="E-Mail"
                className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
              />
              <div className="grid w-full grid-flow-col gap-2">
                <select className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666] appearance-none">
                  <option selected>Vorwahl</option>
                  <option value="+49">+49</option>
                  <option value="+43">+43</option>
                  <option value="+41">+41</option>
                </select>
                <input
                  id="telefon"
                  type="number"
                  required
                  placeholder="Telefonnummer"
                  className="px-4 py-4 border rounded-lg focus:outline-none focus:border-[#66B666] focus:ring-2 focus:ring-[#66B666]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#66B666] rounded-md flex gap-1 items-center flex-col py-4 text-white"
            >
              <h2 className="text-base font-semibold text-center text-white md:text-lg lg:text-xl">
                Jetzt informieren
              </h2>
              <h3 className="text-sm text-center md:text-base">
                kostenlos & unverbindlich
              </h3>
            </button>
          </form>
          <div>
            <h3 className="text-xs font-semibold md:text-sm">
              Unsere Service:
            </h3>
            <ul className="list-disc list-inside">
              <li className="text-xs md:text-sm">
                Generierung von passgenauen Kunden
              </li>
              <li className="text-xs md:text-sm">Hohe Abschlussquoten</li>
              <li className="text-xs md:text-sm">
                Bereits über 2 Millionen Aufträge vermittlelt
              </li>
            </ul>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default ContactPage;
