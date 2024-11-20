import React from "react";
import { useSelector } from "react-redux";
import { selectVisibleItems } from "../../redux/campers/selectors";
import CampersListItem from "../CampersListItem/CampersListItem";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectVisibleItems);

  return (
    <ul className={css.campersList}>
      {campers.map((el) => (
        <CampersListItem key={el.id} camper={el} />
      ))}
    </ul>
  );
};

export default CampersList;
