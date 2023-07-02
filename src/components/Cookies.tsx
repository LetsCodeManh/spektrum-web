import { useEffect, useState } from "react";
import CookiesImage from "../assets/Cookies.png";

const Cookies = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setShowModal(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>
        <img
          src={CookiesImage}
          className="fixed z-50 h-12 aspect-square left-4 bottom-4"
        />
      </button>
      {showModal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-500 bg-opacity-30">
          <div className="fixed flex flex-col gap-4 p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg left-1/2 top-1/2 min-w-[350px] max-w-[400px] z-50">
            <div className="flex items-center gap-2">
              <img src={CookiesImage} className="h-8 aspect-square" />
              <h1 className="text-base font-medium md:text-lg">
                Cookie Notice
              </h1>
            </div>
            <p>
              We use cookies to ensure that we give you the best experience on
              our website.{" "}
              <a href="/dataprotection" className="text-[#66b666]">
                Read cookies policies.
              </a>
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleConsent}
                className="h-8 px-4 text-white bg-black rounded-md font-extralight"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="h-8 px-4 text-white bg-black rounded-md font-extralight"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
