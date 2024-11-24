import { Watch } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <p className={css.waitMessage}>Please wait...</p>

      <Watch
        visible={true}
        height="30"
        width="30"
        radius="48"
        color="rgba(88, 81, 196, 0.3)"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}