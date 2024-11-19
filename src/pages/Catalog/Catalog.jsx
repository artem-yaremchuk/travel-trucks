import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import {
  selectItems,
  selectIsLoading,
  selectError,
} from "../../redux/campers/selectors";
import Filter from "../../components/Filter/Filter";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      <Filter />
      {isLoading && !error && <Loader className={css.loader} />}
      {items.length > 0 && <CampersList />}
    </div>
  );
};

export default Catalog;
