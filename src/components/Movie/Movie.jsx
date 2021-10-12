import React from "react";
import "./MovieStyles.css";
import {Cast} from "../Cast/Cast";


export const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <>
            <div className="movie-tile">
                <p className="rating">{rating}/10</p>
                <img className="poster-image" src={"/assets/" + poster} />
                <div className="tile-content">
                    <div className="movie-info">
                        <h2>{title}</h2>
                        <p>Rok vydání: {year}</p>
                        <p>Žánr: {genre}</p>
                        <p>Režie: {director}</p>
                    </div>
                    <h3>
                        V hlavních rolích:
                    </h3>
                    <div className="cast-info">
                        { cast.map(cast => <Cast name={cast.name} as={cast.as} />)}
                    </div>
                </div>
            </div>
        </>

    )

}

export default Movie;