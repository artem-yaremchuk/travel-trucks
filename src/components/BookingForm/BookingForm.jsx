import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [placeholderText, setPlaceholderText] = useState("Booking date*");

  const handleFocus = () => {
    setPlaceholderText("Select a date between today");
  };

  const handleBlur = () => {
    if (!startDate) {
      setPlaceholderText("Booking date*");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Your booking was successful! We're excited to have you with us.",
    );
  };

  return (
    <div className={css.bookingFormWrap}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        onSubmit={handleSubmit}
        className={css.bookingForm}
        autoComplete="off"
      >
        <div className={css.inputsWrap}>
          <input
            className={css.inputName}
            type="text"
            name="user-name"
            placeholder="Name*"
            required
          ></input>
          <input
            className={css.inputEmail}
            type="email"
            name="user-email"
            placeholder="Email*"
            required
          ></input>
          <div className={css.inputDateWrapper}>
            <DatePicker
              className={css.inputDate}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText={placeholderText}
              dateFormat="MMMM d, yyyy"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <textarea
            className={css.commentBox}
            name="comment"
            placeholder="Comment"
          ></textarea>
        </div>
        <button type="submit" className={css.sendBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
