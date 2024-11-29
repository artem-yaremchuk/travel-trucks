import React from "react";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";

const BookingForm = () => {
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
          <input
            className={css.inputDate}
            type="date"
            name="booking-date"
            placeholder="Booking date*"
            required
          ></input>
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
