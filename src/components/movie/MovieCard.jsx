import "./MovieCard.css";

const MovieCard = ({movie})=>{
    return(
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <p>Year :{movie.year}</p>
            <p>Rating : {movie.rating}</p>
        </div>
    );
}

export default MovieCard;