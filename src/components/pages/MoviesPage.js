import React, { useEffect, useState } from "react";
import Card from "../CardPopular";
import classes from "./MoviePage.module.css";
import SearchBar from "../SearchBar";
import { Link  , Outlet  , Route} from "react-router-dom";

const MoviesPage = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [moviesKind, setMoviesKind] = useState(`Popular`);

  useEffect(() => {
    let url;
    moviesKind === `Popular`
      ? (url = `https://api.themoviedb.org/3/movie/popular?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : moviesKind === `Top rated`
      ? (url = `https://api.themoviedb.org/3/movie/top_rated?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : moviesKind === `latest`
      ? (url = `https://api.themoviedb.org/3/movie/now_playing?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : moviesKind === `Upcomming`
      ? (url = `https://api.themoviedb.org/3/movie/upcoming?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`)
      : (url = `https://api.themoviedb.org/3/movie/popular?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`);
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      setMoviesArray(results);
      console.log(results);
    })();
  }, [moviesKind]);

  const clicked = (e) => {
    let p = e.target.parentElement.children;
    console.log(e);

    for (let i = 0; i < p.length; i++) {
      e.target.parentElement.children[i].classList.remove(`choosen`);
    }
    e.target.classList.add(`choosen`);

    setMoviesKind(`${e.target.innerText}`);
  };

  return (
    <>

    {/* <Route path="/movies" element={<h1>aaaahhhhhhhdjmdd</h1>} /> */}
    <Outlet />
      <div className={classes.container}>
        <div className={classes.poster}></div>
        <SearchBar />
        <div className={classes.filter}>
          <p className="choosen" onClick={clicked}>
            Popular
          </p>
          <p onClick={clicked}>Top rated</p>
          <p onClick={clicked}>latest</p>
          <p onClick={clicked}>Upcomming</p>{" "}
        </div>
        <div className={classes.content}>
          {moviesArray.map((e) => {
            return (
              <Link className={classes.card_link} to={`/movies/${e.id}`}
                  key={e.id}
              >
                <Card
                className={classes.customCardPehavior}
                  title={
                    e.title?e.title.split(` `).length < 7
                      ? e.title
                      : e.title.split(`:`)[0]:`aha`
                  }
                  date={e.release_date ? e.release_date : ``}
                  rate={e.vote_average}
                  img={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`}
                />
              </Link>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default MoviesPage;
