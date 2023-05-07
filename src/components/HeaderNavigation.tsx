import Logo from "../assets/Nav1.png";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

const HeaderNavigation = () => {

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <ProgressBar />
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto mt-2 p md:px-8">
        <Link to="/">
          <img src={Logo} alt="Energyspektrum Logo" className="h-12" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderNavigation;
