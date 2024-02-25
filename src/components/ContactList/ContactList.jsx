import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOperations";
import { selectVisibleContacts } from "../../redux/contactsSelectors";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={phone}
          onDelete={() => handleDelete(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
