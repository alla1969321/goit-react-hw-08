import { MdOutlineReportGmailerrorred } from "react-icons/md";
import css from "./Error.module.css";

export default function Error() {
  return (
    <>
      <p className={css.errorCustomText}>Error</p>
      <MdOutlineReportGmailerrorred className={css.errorCustom} />
    </>
  );
}