import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCamperDetail } from "../../redux/campers/operations";
import { selectError, selectFavorites } from "../../redux/campers/selectors";
import { toggleFavorite } from "../../redux/campers/slice";
import sprite from "../../assets/images/icons.svg";
import css from "./CampersListItem.module.css";

const CampersListItem = ({ camper }) => {
  const { id, name, price, gallery } = camper;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);
  console.log(favorites);
  const isFavorite = favorites.some((favCamper) => favCamper.id === id);

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
      <img
        className={css.camperImage}
        src={gallery[0].original}
        alt={name}
        width={292}
      ></img>
      <h2 className={css.campername}>{name}</h2>
      <p className={css.camperPrice}>€{price.toFixed(2)}</p>
      <svg
        className={`${css.favoritesIcon} ${isFavorite ? css.favoritesIconActive : ""}`}
        onClick={handleToggleFavorite}
        width="26"
        height="24"
      >
        <use href={`${sprite}#icon-heart`}></use>
      </svg>
      <button
        type="button"
        className={css.showMoreBtn}
        onClick={handleShowCamperDetails}
      >
        Show more
      </button>
    </li>
  );
};

export default CampersListItem;
