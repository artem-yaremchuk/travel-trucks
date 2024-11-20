import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoad }) => {
  return (
    <button onClick={handleLoad} className={css.loadMoreBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;