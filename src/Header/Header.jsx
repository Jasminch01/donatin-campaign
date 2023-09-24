import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <div>
          <img className="w-48" src="../../public/img/Logo.png" alt="" />
        </div>
        <div className="space-x-3">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-400 underline font-medium " : " font-medium"
            }
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-400 underline font-medium " : " font-medium"
            }
          >
            Donation
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? " text-red-400 underline font-medium " : " font-medium"
            }
          >
            Statistics
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
