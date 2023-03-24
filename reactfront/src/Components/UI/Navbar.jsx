import ButtonYellow from "./ButtonYellow";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-cblack border-gray-200 px-2 sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <img
                        src="/img/logo.png"
                        className="h-6 mr-3 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="text-white self-center text-xl font-semibold whitespace-nowrap">
                        MCO Pizzeria
                    </span>
                </a>
                <div className="flex md:order-2">
                    <NavLink
                        to="/orderpizza"
                        className={({ isActive }) =>
                            isActive ? "invisible" : ""
                        }
                    >
                        <ButtonYellow>
                            <span className="text-base font-semibold ">
                                Make Order
                            </span>
                        </ButtonYellow>
                    </NavLink>
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-cta"
                >
                    <ul className="flex flex-col p-4 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-cyellow text-base md:bg-transparent md:p-0"
                                        : "text-white text-base hover:text-cyellow rounded md:bg-transparent md:p-0"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/orders"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-cyellow text-base  md:bg-transparent md:p-0"
                                        : "text-white text-base hover:text-cyellow md:bg-transparent md:p-0"
                                }
                            >
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
