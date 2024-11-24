import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import {
  selectItemDetails,
  selectIsLoading,
} from "../../redux/campers/selectors.js";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import sprite from "../../assets/images/icons.svg";
import css from "./CamperDetail.module.css";

const CamperDetail = () => {
  const isLoading = useSelector(selectIsLoading);
  const itemDetails = useSelector(selectItemDetails);

  if (!itemDetails) {
    return;
  }

  const { id, name, price, rating, location, description, gallery, reviews } =
    itemDetails;

  const [country, city] = location.split(", ");
  const newLocation = `${city}, ${country}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.camperDetail}>
          <h2 className={css.camperName}>{name}</h2>
          <div className={css.camperRatingLocation}>
            <div className={css.camperIconRating}>
              <svg className={css.ratingIcon} width="16" height="16">
                <use href={`${sprite}#icon-star-yellow`}></use>
              </svg>
              <p className={css.camperRating}>
                {rating}({reviews.length} Reviews)
              </p>
            </div>
            <div className={css.camperMapLocation}>
              <svg className={css.mapIcon} width="16" height="16">
                <use href={`${sprite}#icon-map`}></use>
              </svg>
              <p className={css.camperLocation}>{newLocation}</p>
            </div>
          </div>
          <p className={css.camperPrice}>€{price.toFixed(2)}</p>
          <ul className={css.galleryList}>
            {gallery.map((el) => (
              <li key={el.thumb} className={css.galleryListItem}>
                <img
                  className={css.galleryImage}
                  src={el.original}
                  alt={name}
                  width={292}
                ></img>
              </li>
            ))}
          </ul>
          <p className={css.camperDescription}>{description}</p>
          <div className={css.addInfo}>
            <ul className={css.addInfoLinks}>
              <li>
                <Link
                  to={`/catalog/${id}/features`}
                  className={css.featuresLink}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link to={`/catalog/${id}/reviews`} className={css.reviewsLink}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <BookingForm />
        </div>
      )}
    </>
  );
};

export default CamperDetail;
