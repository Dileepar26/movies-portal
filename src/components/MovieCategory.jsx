import React from 'react'
import '../styles/MovieCategory.css'
import movies from './../data/actionMovies.json'

function MovieCategory({title}) {
    return (
        <div>
            <div className="movies-category">
                <div className='movie-category-name'>{title}</div>
                <div className="movies-row">
                    {movies.map((movie, index) => (
                        <img
                        key={
                            index
                        }
                        src= {movie.image}
                        alt={movie.name}
                        className='movie-img'/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieCategory