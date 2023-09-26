import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar justify-between max-w-7xl mx-auto md:px-4 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-400 underline font-medium "
                    : " font-medium "
                }
              >
                {" "}
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-400 underline font-medium "
                    : " font-medium "
                }
              >
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-red-400 underline font-medium "
                    : " font-medium "
                }
              >
                Statistics
              </NavLink>
            </div>
          </div>
          <a className="uppercase font-extrabold text-xl">
            <img
              className="w-36 hidden lg:flex"
              src="https://i.ibb.co/X4xv4SS/Logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="space-x-3 hidden lg:flex">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 underline font-medium text-lg "
                : " font-medium text-lg"
            }
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 underline font-medium  text-lg"
                : " font-medium text-lg"
            }
          >
            Donation
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " text-red-400 underline font-medium  text-lg"
                : " font-medium text-lg"
            }
          >
            Statistics
          </NavLink>
        </div>
        <div className="md:flex lg:hidden pr-5">
          <a className="uppercase font-extrabold text-xl">
            <img className="w-36" src="https://i.ibb.co/X4xv4SS/Logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
