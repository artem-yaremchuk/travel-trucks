import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <Link className={css.headerLogo} to="/">
          <svg width="136" height="16">
            <use href="/assets/images/icons.svg#icon-logo"></use>
          </svg>
        </Link>
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
    </header>
  );
};

export default Header;
