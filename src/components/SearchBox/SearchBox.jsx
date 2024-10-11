import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./SearchBox.module.css";

const initialValues = {
  filter: "",
};

export default function SearchBox({ value, onFilter }) {
  const filterId = useId();
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <label htmlFor={filterId}> Find contacts by name</label>
          <Field
            type="text"
            name="filter"
            id={filterId}
            className={css.filter}
            value={value}
            onChange={(event) => onFilter(event.target.value)}
          />
        </Form>
      </Formik>
    </div>
  );
}