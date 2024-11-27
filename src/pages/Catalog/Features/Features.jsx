import React from "react";
import { useSelector } from "react-redux";
import { selectItemDetails } from "../../../redux/campers/selectors";
import CategoriesList from "../../../components/CategoriesList/CategoriesList";
import css from "./Features.module.css";

const Features = () => {
  const itemDetails = useSelector(selectItemDetails);

  const { form, length, width, height, tank, consumption, ...categories } =
    itemDetails;

  const formatWithSpace = (value) => {
    return value.replace(/(\d)([a-zA-Z]+)/, "$1 $2"); // Додаємо пробіл між числом і текстом
  };

  const vehicleDetails = [
    { label: "Form", value: form },
    { label: "Length", value: formatWithSpace(length) },
    { label: "Width", value: formatWithSpace(width) },
    { label: "Height", value: formatWithSpace(height) },
    { label: "Tank", value: formatWithSpace(tank) },
    { label: "Consumption", value: consumption },
  ];

  return (
    <div className={css.features}>
      <CategoriesList categories={categories} />
      <h3 className={css.venicleTitle}>Vehicle details</h3>
      <ul className={css.venicleDetailsList}>
        {vehicleDetails.map((detail) => (
          <li key={detail.label} className={css.venicleDetailsItem}>
            <p>{detail.label}</p>
            <p className={css.detailValue}>{detail.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
