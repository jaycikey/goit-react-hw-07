import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOperations";
import styles from "./App.module.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBar from "./SearchBox/SearchBar";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
