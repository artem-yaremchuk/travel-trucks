import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors";
import CampersListItem from "../../components/CampersListItem/CampersListItem";
import css from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.favoritesPage}>
      {favorites.length === 0 ? (
        <p className={css.noFavorites}>You have no favorite campers yet.</p>
      ) : (
        <ul className={css.campersList}>
          {favorites.map((camper) => (
            <CampersListItem key={camper.id} camper={camper} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
