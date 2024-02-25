import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contactsOperations";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  // Доступ до стану контактів і фільтра
  const {
    items: contacts,
    loading,
    error,
  } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters.name);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>An error occurred: {error}</p>;

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
