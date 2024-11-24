import { Link } from "react-router-dom";

import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.registrContainer}>
      <Link className={css.link} to="/register">
        Registration
      </Link>
      <Link className={css.link} to="/login">
        Log in
      </Link>
    </div>
  );
}