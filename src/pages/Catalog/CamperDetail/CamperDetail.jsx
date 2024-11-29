import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import StyledLink from "./StyledLink";
import {
  selectItemDetails,
  selectIsLoading,
} from "../../../redux/campers/selectors";
import BookingForm from "../../../components/BookingForm/BookingForm";
import Loader from "../../../components/Loader/Loader.jsx";
import sprite from "../../../assets/images/icons.svg";
import css from "./CamperDetail.module.css";

const CamperDetail = () => {
  const isLoading = useSelector(selectIsLoading);
  const itemDetails = useSelector(selectItemDetails);
  const featuresLocation = useLocation();

  if (!itemDetails) {
    return;
  }

  const { id, name, price, rating, location, description, gallery, reviews } =
    itemDetails;

  const [country, city] = location.split(", ");
  const newLocation = `${city}, ${country}`;

  const isFeaturesActive =
    featuresLocation.pathname === `/catalog/${id}` ||
    featuresLocation.pathname === `/catalog/${id}/features`;

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
                <StyledLink
                  to={`/catalog/${id}/features`}
                  className={`${css.featuresLink} ${isFeaturesActive ? "active" : ""}`}
                >
                  Features
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  to={`/catalog/${id}/reviews`}
                  className={css.reviewsLink}
                >
                  Reviews
                </StyledLink>
              </li>
            </ul>
          </div>
          <div className={css.outletBookingForm}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
};

export default CamperDetail;
