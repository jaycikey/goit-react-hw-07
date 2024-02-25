import { FaUserAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";

const Contact = ({ id, name, phone, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo} id={id}>
        <div className={styles.contactRow}>
          <FaUserAlt className={styles.contactIcon} />
          <p>{name}</p>
        </div>
        <div className={styles.contactRow}>
          <MdPhone className={styles.phoneIcon} />
          <p>{phone}</p>
        </div>
      </div>
      <Button type={"button"} onClick={onDelete} id={id}>
        Delete
      </Button>
    </li>
  );
};

export default Contact;
