import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCamperDetail } from "../../redux/campers/operations";
import { selectError } from "../../redux/campers/selectors";
import css from "./CampersListItem.module.css";

const CampersListItem = ({ camper }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);

  const handleShowCamperDetails = () => {
    dispatch(getCamperDetail(camper));

    if (!error) {
      navigate(`/catalog/${camper.id}`);
    }
  };

  return (
    <button
      type="button"
      className={css.showMoreBtn}
      onClick={handleShowCamperDetails}
    >
      Show more
    </button>
  );
};

export default CampersListItem;
