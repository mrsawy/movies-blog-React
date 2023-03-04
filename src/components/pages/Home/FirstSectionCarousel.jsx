import React, { useState } from "react";
import PinkButton from "../../PinkButton";
import classes from "./FirstSectionCarousel.module.css";
import Swing from "./Swing";

export default function FirstSectionCarousel() {
  const [backGroundNum, setBackGroundNum] = useState(0);

  const changeBackGroundHandler = (e) => {
    setBackGroundNum((p) => {
      console.log(p);
      return p === 3 ? 0 : p + 1;
    });
  };
  return (
    <div className={classes.bigContainer}>
      <button
        className={classes.prevBtn}
        onClick={() => {
          setBackGroundNum((p) => {
            console.log(p);
            return p === 0 ? 3 : p - 1;
          });
        }}
      >{`<`}</button>
      <div className={classes.sectionsContainer}>
        <Swing
          className={`${classes.first_poster_container} ${
            backGroundNum !== 0 ? classes.unChoosen : classes.choosen
          }`}
          title={`BATMAN`}
          genre={[`action`,`crime`,`thriller`]}

        />
          <Swing
          className={`${classes.second_poster_container} ${
            backGroundNum !== 1 ? classes.unChoosen : classes.choosen
          }`}
          title={`Mortal Combact`}
          genre={[`action`,`crime`,`thriller`]}



        />
          <Swing
          className={`${classes.third_poster_container} ${
            backGroundNum !== 2 ? classes.unChoosen : classes.choosen
          }`}
          title={`MidWay`}
          genre={[`action`,`crime`,`thriller`]}


        />
          <Swing
          className={`${classes.forth_poster_container} ${
            backGroundNum !== 3 ? classes.unChoosen : classes.choosen
          }`}
          title={`Beer`}
          genre={[`action`,`crime`,`thriller`]}


        />
      </div>
      <button
        className={classes.nextBtn}
        onClick={changeBackGroundHandler}
      >{`>`}</button>
    </div>
  );
}
