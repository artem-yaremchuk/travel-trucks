import React from "react";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>
        <Link className={css.btnLink} to="/catalog">
          <button type="button" className={css.heroBtn}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
