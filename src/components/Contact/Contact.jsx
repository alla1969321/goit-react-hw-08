import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import ModalConfirmDeleteContact from "../ModalConfirmDeleteContact/ModalConfirmDeleteContact";
import ModalEditContact from "../ModalEditContact/ModalEditContact";

export default function Contact({ contact: { name, number, id } }) {
  return (
    <>
      <div>
        <p>
          <FaUser className={css.iconContact} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.iconContact} />
          {`+380${number}`}
        </p>
      </div>

      <div className={css.modalsContainer}>
        <ModalEditContact name={name} number={number} id={id} />
        <ModalConfirmDeleteContact id={id} />
      </div>
    </>
  );
}