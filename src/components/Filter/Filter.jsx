import React from "react";
import sprite from "../../assets/images/icons.svg";
import css from "./Filter.module.css";

const Filter = () => {
  const iconsMapEquipment = {
    AC: "icon-ac",
    Automatic: "icon-transmission",
    Kitchen: "icon-kitchen",
    TV: "icon-tv",
    Bathroom: "icon-bathroom",
  };

  const iconsMapType = {
    Van: "icon-van",
    "Fully Integrated": "icon-fully-integrated",
    Alcove: "icon-alcove",
  };

  return (
    <div className={css.filterContainer}>
      <form className={css.filterForm} autoComplete="off">
        <label htmlFor="locationInput" className={css.locationLabel}>
          Location
        </label>
        <div className={css.inputWrap}>
          <input
            type="text"
            name="location"
            className={css.locationInput}
            id="locationInput"
            placeholder="City"
          />
          <svg className={css.mapIcon} width="20" height="20">
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </div>
        <p className={css.filterTitle}>Filters</p>
        <h3 className={css.searchParamsTitle}>Vehicle equipment</h3>
        <ul className={css.equipmentList}>
          {Object.keys(iconsMapEquipment).map((key) => (
            <li key={key} className={css.equipmentListItem}>
              <svg className={css.equipmentIcon} width="32" height="32">
                <use href={`${sprite}#${iconsMapEquipment[key]}`}></use>
              </svg>
              <span className={css.equipmentName}>{key}</span>
            </li>
          ))}
        </ul>
        <h3 className={css.searchParamsTitle}>Vehicle type</h3>
        <ul className={css.typeList}>
          {Object.keys(iconsMapType).map((key) => (
            <li key={key} className={css.typeListItem}>
              <svg className={css.typeIcon} width="32" height="32">
                <use href={`${sprite}#${iconsMapType[key]}`}></use>
              </svg>
              <span className={css.typeName}>{key}</span>
            </li>
          ))}
        </ul>
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
