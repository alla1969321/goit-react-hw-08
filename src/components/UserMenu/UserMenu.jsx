import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  return (
    <div className={css.userContainer}>
      <p>Welcome {user.name}</p>
      <button
        className={css.logOutBtn}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}