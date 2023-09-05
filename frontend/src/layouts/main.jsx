import { NavLink, Outlet } from "react-router-dom";
import styles from "./main.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <ToastContainer />
      <header>
        <nav className={styles.header}>
          <h1>Logo</h1>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Singup</NavLink>
            <NavLink to="/help">Help</NavLink>
            <div className="flex items-center md:order-2">
              <button
                type="button"
                data-dropdown-toggle="language-dropdown-menu"
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                English (US)
              </button>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                id="language-dropdown-menu"
              >
                <ul className="py-2 font-medium" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        English (US)
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">Italiano</div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      classNameName="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        中文 (繁體)
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="navbar-language"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-language"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            */
          </div>
        </nav>
      </header>
      <main className="homepageMain">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
