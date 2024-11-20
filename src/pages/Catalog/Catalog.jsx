import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreCampers } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import {
  selectVisibleItems,
  selectIsLoading,
  selectError,
  selectTotal,
} from "../../redux/campers/selectors";
import Filter from "../../components/Filter/Filter";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const visibleItems = useSelector(selectVisibleItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreCampers());
  };

  const showLoadMoreButton = !isLoading && visibleItems.length < total;

  return (
    <div className={css.catalog}>
      <Filter />
      {isLoading && !error && <Loader className={css.loader} />}
      <div className={css.listBtn}>
        {!isLoading && visibleItems.length > 0 && <CampersList />}
        {showLoadMoreButton && <LoadMoreBtn handleLoad={handleLoadMore} />}
      </div>
    </div>
  );
};

export default Catalog;
