import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Navigation() {
  const changeActivePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const isLogggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink className={changeActivePage} to="/">
            Home
          </NavLink>
        </li>
        {isLogggedIn && (
          <li>
            <NavLink className={changeActivePage} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}