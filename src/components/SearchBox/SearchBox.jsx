import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectValueFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectValueFilter);

  return (
    <div className={css.containerSearcBox}>
      <p>Find contacts</p>
      <input
        value={value}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        type="text"
      />
    </div>
  );
}