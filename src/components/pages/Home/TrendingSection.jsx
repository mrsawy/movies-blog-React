import React, { useState, useEffect } from "react";
import Similar from "../../similar";
import classes from "./TrendingSection.module.css";

export default function TrendingSection(props) {
  const [mediaType, setMediaType] = useState(`movie`);
  const [timePeriod, setTimePeriod] = useState(`day`);
  const [url,setUrl]=useState(`https://api.themoviedb.org/3/trending/${mediaType}/${timePeriod}?api_key=6d2292cf6936acd6b878f58decae96c6`)
  useEffect(()=>{
    setUrl(`https://api.themoviedb.org/3/trending/${mediaType}/${timePeriod}?api_key=6d2292cf6936acd6b878f58decae96c6`)
  },[mediaType,timePeriod])
  return (
    <section className={classes.trending}>
      <div className={classes.sidemovies}>
        <Similar
        url={url}
          noTransition={true}
          titleComponent={(props) => {
            return (
              <div className={`${classes.headermovies} ${props.className}`}>
                <h2>trending</h2>
                <div className={classes.headermovies}>
                  <p onClick={()=>{setMediaType(`movie`)}} className={mediaType == `movie` && classes.choosen}>
                    Movies
                  </p>
                  <p onClick={()=>{setMediaType(`tv`)}} className={mediaType == `tv` && classes.choosen}>
                    Series
                  </p>
                  <p style={{ color: `grey` }}>/</p>
                  <p onClick={()=>{setTimePeriod(`day`)}} className={timePeriod == `day` && classes.choosen}>Day</p>
                  <p onClick={()=>{setTimePeriod(`week`)}} className={timePeriod == `week` && classes.choosen}>Weak</p>
                </div>
              </div>
            );
          }}
          notitle={true}
          kind={`movie`}
          noHr={true}
        />
      </div>
    </section>
  );
}

// const TitleComponent = (props) => {
//   const [mediaType, setMediaType] = useState(`movies`);
//   const [timePeriod, setTimePeriod] = useState(`day`);

//   return (
//     <div className={`${classes.headermovies} ${props.className}`}>
//       <h2>trending</h2>
//       <div className={classes.headermovies}>
//         <p 
//         className={mediaType == `movies` && classes.choosen}
//         >Movies</p>
//         className={mediaType == `Series` && classes.choosen}
//         <p>Series</p>
//         <p style={{ color: `grey` }}>/</p>
//         <p className={mediaType == `day` && classes.choosen}>Day</p>
//         <p className={mediaType == `weak` && classes.choosen}>Weak</p>
//       </div>
//     </div>
//   );
// };
