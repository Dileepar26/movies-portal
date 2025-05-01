import {useState} from 'react'
import '../styles/MovieCarousel.css'

function MovieCarousel() {
    const [index, setIndex] = useState(0);
    const movies = [
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/becde9169107197.64473cc648ca2.jpg',
        },
        {
            image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/john-wick-chapter-4-et00311714-1679379542.jpg',
        }
    ];

    const prevSlide = () => {
        setIndex((index - 1 + movies.length) % movies.length);
    };

    const nextSlide = () => {
        setIndex((index + 1) % movies.length);
    };

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Top Movies</h2>
            <div className="carousel">
                <button className="arrow" onClick={prevSlide}>&larr;</button>
                <div className="movie-slide">
                    <img src={movies[index].image} alt={movies[index].title} />
                </div>
                <button className="arrow" onClick={nextSlide}>&#8594;</button>
            </div>
        </div>
    );
};

export default MovieCarousel
