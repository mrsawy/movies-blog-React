import React from "react";
import logoImage from "./../images/film-reel-36155.png";

// { useEffect }
import { Link, NavLink,useLocation } from "react-router-dom";

//import Card from "./Card";
import classes from "./NavBar.module.css";

const classesFunction = (obj) => {
  let { isActive } = obj;
  return isActive ? `${classes.link} ${classes.active}` : `${classes.link}`;
};

const NavBar = () => {
  const location = useLocation()
  const currentUrl = location.pathname;
  console.log(currentUrl);

  return (
    <>
    {currentUrl !== `/Auth` &&
      <div className={classes.big_container}>
        <div className={classes.first_container}>
          <div className={classes.logo}>
            {/* <img src={logoImage} alt="" /> */}
            
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
        <NavLink className={classesFunction} to="/Auth">
            Login
          </NavLink>         
        </div>
      </div>}
    </>
  );
};

export default NavBar;
