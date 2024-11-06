import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCamperDetail } from "../../redux/campers/operations";
import { selectError, selectFavorites } from "../../redux/campers/selectors";
import { toggleFavorite } from "../../redux/campers/slice";
import CategoriesList from "../CategoriesList/CategoriesList";
import sprite from "../../assets/images/icons.svg";
import css from "./CampersListItem.module.css";

const CampersListItem = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    ...categories
  } = camper;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favCamper) => favCamper.id === id);

  const [country, city] = location.split(", ");
  const newLocation = `${city}, ${country}`;

  const handleShowCamperDetails = () => {
    dispatch(getCamperDetail(camper));

    if (!error) {
      navigate(`/catalog/${id}`);
    }
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <li className={css.camperListItem}>
      <div className={css.camperMainInfo}>
        <img
          className={css.camperImage}
          src={gallery[0].original}
          alt={name}
          width={292}
        ></img>
        <div className={css.camperDetails}>
          <div className={css.camperInfo}>
            <h2 className={css.camperName}>{name}</h2>
            <div className={css.camperPriceFavotites}>
              <p className={css.camperPrice}>€{price.toFixed(2)}</p>
              <svg
                className={`${css.favoritesIcon} ${isFavorite ? css.favoritesIconActive : ""}`}
                onClick={handleToggleFavorite}
                width="26"
                height="24"
              >
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
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
          <p className={css.camperDescription}>{description}</p>
          <CategoriesList categories={categories} />
          <button
            type="button"
            className={css.showMoreBtn}
            onClick={handleShowCamperDetails}
          >
            Show more
          </button>
        </div>
      </div>
    </li>
  );
};

export default CampersListItem;
