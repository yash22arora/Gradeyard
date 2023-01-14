import { Link, useParams } from "react-router-dom";
import NavLogo from "../../assets/logo_full.png";
import { NavOptions } from "./config";
import NavOption from "./navOption";

const Navbar: React.FC = () => {
  const link = useParams().link;
  const data = [" ", 5, 6];

  return (
    <nav className="w-full px-28 bg-white navShadow h-32">
      <div className="flex flox-row justify-start items-center w-full mb-2">
        <Link to="/">
          <img src={NavLogo} alt="logo" className="h-16" />
        </Link>
        <div className="flex flex-row items-center h-full pl-24">
          {NavOptions.map((option, idx) => (
            <NavOption
              key={option.id}
              option={option}
              isActive={link === option.id}
              data={data[idx]}
            />
          ))}
        </div>
        <div className="ml-auto flex flex-row items-center mt-2 cursor-pointer">
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
