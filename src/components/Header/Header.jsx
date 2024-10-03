import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <nav>
        <ul className={css.headerList}>
          <li className={css.headerListItem}>
            <Link className={css.headerLink} to="/">
              Home
            </Link>
          </li>
          <li className={css.headerListItem}>
            <Link className={css.headerLink} to="/catalog">
              Catalog
            </Link>
          </li>
          <li className={css.headerListItem}>
            <Link className={css.headerLink} to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;