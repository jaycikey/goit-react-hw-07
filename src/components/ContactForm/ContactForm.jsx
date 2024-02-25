import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { addContact } from "../../redux/contactsSlice";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols long")
    .max(50, "Name must be at less 50 symbols long")
    .required("This is a required field")
    .test(
      "is-not-empty",
      "Name cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
  number: Yup.string()
    .min(3, "Phone must be at least 3 symbols long")
    .max(50, "Phone must be at less 50 symbols long")
    .required("This is a required field")
    .test(
      "is-not-empty",
      "Phone cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = { id: nanoid(), ...values };
        dispatch(addContact(newContact));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor={nameFieldId}>Name:</label>
          <Field id={nameFieldId} className={styles.input} name="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor={numberFieldId}>Phone:</label>
          <Field id={numberFieldId} className={styles.input} name="number" />
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
