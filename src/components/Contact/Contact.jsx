import { GoPersonFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p className={css.item}>
          <GoPersonFill />
          {name}
        </p>
        <p className={css.item}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}