import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors";
import css from "./Header.module.css";

const StyledLink = styled(NavLink)`
  &.active {
    color: #d84343;
  }
`;

const Header = () => {
  const favorites = useSelector(selectFavorites);
  const favoritesCount = favorites.length;

  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link className={css.headerLogo} to="/">
          <Logo className={css.logoIcon} />
        </Link>
        <ul className={css.headerList}>
          <li className={css.headerListItem}>
            <StyledLink to="/" className={css.headerLink}>
              Home
            </StyledLink>
          </li>
          <li className={css.headerListItem}>
            <StyledLink to="/catalog" className={css.headerLink}>
              Catalog
            </StyledLink>
          </li>
          <li className={css.headerListItem}>
            <StyledLink to="/favorites" className={css.headerLink}>
              Favorites
              {favoritesCount > 0 && (
                <span className={css.favoritesCount}>{favoritesCount}</span>
              )}
            </StyledLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
