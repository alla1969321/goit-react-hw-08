import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}