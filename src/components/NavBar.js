import React from "react";
// { useEffect }
import { Link, NavLink } from "react-router-dom";

//import Card from "./Card";
import classes from "./NavBar.module.css";

const classesFunction = (obj) => {
  let { isActive } = obj;
  return isActive ? `${classes.link} ${classes.active}` : `${classes.link}`;
};

const NavBar = () => {
  return (
    <>
      <div className={classes.big_container}>
        <div className={classes.first_container}>
          <div className={classes.logo}>
            <img src="../images/Screenshot_15.png" alt="" />
          </div>
          <NavLink className={classesFunction} to="/">
            home
          </NavLink>
          <NavLink className={classesFunction} to="/movies">
            movies
          </NavLink>
          <NavLink className={classesFunction} to="/tv-shows">
            tv-shows
          </NavLink>
          <NavLink className={classesFunction} to="/people">
            people
          </NavLink>
        </div>
        <div className={classes.second_container}>
          <div>profile</div>
          <div>search</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
