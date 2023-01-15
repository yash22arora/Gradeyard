import { Link, useLocation, useParams } from "react-router-dom";
import NavLogo from "../../assets/logo_full.png";
import { NavOptions } from "./config";
import NavOption from "./navOption";

const Navbar: React.FC = () => {
  const location = useLocation();
  const tab = location.pathname.split("/")[2];
  const data = [" ", 5, 6];

  return (
    <nav className="w-full px-12 bg-white navShadow h-28 flex items-center justify-center">
      <div className="flex flox-row justify-start items-center max-w-6xl w-full mb-2">
        <Link to="/">
          <img src={NavLogo} alt="logo" className="h-8 mb-1" />
        </Link>
        <div className="flex flex-row items-center h-full pl-16">
          {NavOptions.map((option, idx) => (
            <NavOption
              key={option.id}
              option={option}
              isActive={tab === option.id}
              data={data[idx]}
            />
          ))}
        </div>
        <div className="ml-auto flex flex-row items-center my-auto cursor-pointer">
          <span className="font-semibold text-primary.light">
            yashvardhan2210
          </span>
          <img
            src={"https://assets.devfolio.co/assets/avatar@2x.png"}
            alt="avatar"
            className="ml-4 h-10"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
