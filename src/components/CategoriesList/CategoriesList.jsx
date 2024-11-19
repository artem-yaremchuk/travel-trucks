import sprite from "../../assets/images/icons.svg";
import css from "./CategoriesList.module.css";

const CategoriesList = ({ categories }) => {
  const iconsMap = {
    transmission: "icon-transmission",
    engine: "icon-engine",
    AC: "icon-ac",
    bathroom: "icon-bathroom",
    kitchen: "icon-kitchen",
    TV: "icon-tv",
    radio: "icon-radio",
    refrigerator: "icon-refrigerator",
    microwave: "icon-microwave",
    gas: "icon-gas",
    water: "icon-water",
  };

  return (
    <ul className={css.categoriesList}>
      {Object.keys(iconsMap).map((key) =>
        categories[key] ? (
          <li key={key} className={css.categoryItem}>
            <svg className={css.categoryIcon} width="16" height="16">
              <use href={`${sprite}#${iconsMap[key]}`}></use>
            </svg>
            <span className={css.categoryName}>
              {typeof categories[key] === "string" ? categories[key] : key}
            </span>
          </li>
        ) : null,
      )}
    </ul>
  );
};

export default CategoriesList;
