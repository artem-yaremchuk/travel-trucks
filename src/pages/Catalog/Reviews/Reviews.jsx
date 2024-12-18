import React from "react";
import { useSelector } from "react-redux";
import { selectItemDetails } from "../../../redux/campers/selectors";
import sprite from "../../../assets/images/icons.svg";
import css from "./Reviews.module.css";

const Reviews = () => {
  const itemDetails = useSelector(selectItemDetails);
  const { reviews } = itemDetails;
  
  if (!reviews) {
    return;
  }

  return (
    <div className={css.reviews}>
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map((review, index) => (
              <li key={index} className={css.reviewsListItem}>
                  <div className={css.reviewTitleRating}>
              <h2 className={css.reviewTitle}>
                {review.reviewer_name[0].toUpperCase()}
                  </h2>
                <div>
              <p className={css.reviewerName}>{review.reviewer_name}</p>
              {}
              <div className={css.reviewerRating}>
                {[...Array(review.reviewer_rating)].map((_, ratingIndex) => (
                  <svg
                    key={`yellow-${ratingIndex}`}
                    className={css.ratingIcon}
                    width="16"
                    height="16"
                  >
                    <use href={`${sprite}#icon-star-yellow`}></use>
                  </svg>
                ))}

                {[...Array(5 - review.reviewer_rating)].map(
                  (_, ratingIndex) => (
                    <svg
                      key={`white-${ratingIndex}`}
                      className={css.ratingIcon}
                      width="16"
                      height="16"
                    >
                      <use href={`${sprite}#icon-star-white`}></use>
                    </svg>
                  ),
                )}
                      </div>
                      </div>
                      </div>
              <p className={css.reviewerComment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>
          We do not have any reviews for this camper.
        </p>
      )}
    </div>
  );
};

export default Reviews;
