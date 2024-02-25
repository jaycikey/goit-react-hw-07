import styles from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

const SearchBar = () => {
  const filter = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="search-filter">Find contacts by name:</label>
      <input
        id="search-filter"
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
