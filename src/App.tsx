import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import ErrorPage from "./page/ErrorPage";
import ContactPage from "./page/ContactPage";
import DataProtectionPage from "./page/DataProtectionPage";
import Impressum from "./page/Impressum";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dataprotection" element={<DataProtectionPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
