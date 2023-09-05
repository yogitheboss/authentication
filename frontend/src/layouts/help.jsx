import { NavLink, Outlet } from "react-router-dom";
import styles from './help.module.css'
function HelpLayout() {
  return (
    <>
      HelpLayout
      <nav className={styles.navlinks}>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HelpLayout;
