import React, { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import {
  setLocation,
  setVenicleType,
  setEquipment,
  resetFilters,
} from "../../redux/filters/slice";
import { resetCampers } from "../../redux/campers/slice";
import { getCampersByParams } from "../../redux/campers/operations";
import sprite from "../../assets/images/icons.svg";
import selectStyles from "./selectStyles";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const { location, venicleType, equipment } = useSelector(selectFilters);
  const [isFocused, setIsFocused] = useState(false);

  const filtersMap = {
    equipment: [
      { key: "AC", icon: "icon-ac" },
      { key: "Automatic", icon: "icon-transmission" },
      { key: "Kitchen", icon: "icon-kitchen" },
      { key: "TV", icon: "icon-tv" },
      { key: "Bathroom", icon: "icon-bathroom" },
      { key: "Radio", icon: "icon-radio" },
      { key: "Refrigerator", icon: "icon-refrigerator" },
      { key: "Microwave", icon: "icon-microwave" },
      { key: "Gas", icon: "icon-gas" },
      { key: "Water", icon: "icon-water"},
    ],
    venicleType: [
      { key: "Panel Truck", icon: "icon-van" },
      { key: "Fully Integrated", icon: "icon-fully-integrated" },
      { key: "Alcove", icon: "icon-alcove" },
    ],
  };

  const cities = [
    { value: "Kyiv, Ukraine", label: "Kyiv, Ukraine" },
    { value: "Dnipro, Ukraine", label: "Dnipro, Ukraine" },
    { value: "Lviv, Ukraine", label: "Lviv, Ukraine" },
    { value: "Odesa, Ukraine", label: "Odesa, Ukraine" },
    { value: "Kharkiv, Ukraine", label: "Kharkiv, Ukraine" },
    { value: "Sumy, Ukraine", label: "Sumy, Ukraine" },
    { value: "Poltava, Ukraine", label: "Poltava, Ukraine" },
  ];

  const handleLocationChange = (selectedOption) => {
    dispatch(setLocation(selectedOption ? selectedOption.value : null));
  };

  const handleVenicleTypeChange = (type) => {
    dispatch(setVenicleType(type === venicleType ? null : type));
  };

  const handleEquipmentChange = (equipmentItem) => {
    const updatedEquipment = equipment.includes(equipmentItem)
      ? equipment.filter((item) => item !== equipmentItem)
      : [...equipment, equipmentItem];
    dispatch(setEquipment(updatedEquipment));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetCampers());
    dispatch(getCampersByParams({ location, venicleType, equipment }));
    dispatch(resetFilters());
  };

  const isSearchDisabled = !location && !venicleType && equipment.length === 0;

  return (
    <div className={css.filterContainer}>
      <form
        onSubmit={handleSubmit}
        className={css.filterForm}
        autoComplete="off"
      >
        <label className={css.locationLabel}>Location</label>
        <div className={css.selectWrap}>
          <Select
            options={cities}
            placeholder="Select a city"
            styles={selectStyles}
            onChange={handleLocationChange}
            isClearable
            value={cities.find((city) => city.value === location) || null}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <svg
            className={`${css.mapIcon} ${isFocused ? css.focusedIcon : ""}`}
            width="20"
            height="20"
          >
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </div>
        <p className={css.filterTitle}>Filters</p>
        <h3 className={css.searchParamsTitle}>Venicle equipment</h3>
        <ul className={css.equipmentList}>
          {filtersMap.equipment.map(({ key, icon }) => (
            <li
              key={key}
              className={`${css.equipmentListItem} ${
                equipment.includes(key) ? css.active : ""
              }`}
              onClick={() => handleEquipmentChange(key)}
            >
              <svg className={css.equipmentIcon} width="32" height="32">
                <use href={`${sprite}#${icon}`}></use>
              </svg>
              <span className={css.equipmentName}>{key}</span>
            </li>
          ))}
        </ul>
        <h3 className={css.searchParamsTitle}>Venicle type</h3>
        <ul className={css.venicleTypeList}>
          {filtersMap.venicleType.map(({ key, icon }) => (
            <li
              key={key}
              className={`${css.venicleTypeListItem} ${
                venicleType === key ? css.active : ""
              }`}
              onClick={() => handleVenicleTypeChange(key)}
            >
              <svg className={css.venicleTypeIcon} width="32" height="32">
                <use href={`${sprite}#${icon}`}></use>
              </svg>
              <span className={css.venicleTypeName}>{key}</span>
            </li>
          ))}
        </ul>
        <button type="submit" className={css.searchBtn} disabled={isSearchDisabled}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
