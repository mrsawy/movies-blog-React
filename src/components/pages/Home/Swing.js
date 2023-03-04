import React from 'react'
import PinkButton from '../../PinkButton'
import classes from "./FirstSectionCarousel.module.css";


export default function Swing(props) {
    
  return (
    <section
    className={props.className
//         `
    
// p
//         //classes.first_poster_container} ${
//     //   backGroundNum !== 0 ? classes.unChoosen : classes.choosen
//     }`
    }
  >
    <div className={classes.info}>
      <div className={classes.rate_and_genre}>
        <div className="rate">
          <p>
            <svg
              className={classes[`ipl-icon`]}
              xmlns="http://www.w3.org/2000/svg"
              fill="#cf639b"
              height="14"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            6.5
          </p>
        </div>
        <div className={classes.genre}>
          <p>{`${props.genre[0]}/${props.genre[1]}/${props.genre[2]}`}</p>
        </div>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.overview}>
       {props.overview}
      </div>
      <div>
        <PinkButton label={`Watch Now`} className={classes.fontSmaller} />
        <PinkButton
          label={`Add To List`}
          className={`${classes.customAddToList} ${classes.fontSmaller}`}
        />
      </div>
    </div>
    <div className={classes.empty}></div>
  </section>  )
}
