import styles from "./App.module.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBar from "./SearchBox/SearchBar";

const App = () => {
  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
