import "./MovieCard.css";

const MovieCard = ({movie,onAdd,onRemove , isWishlisted})=>{
    return(
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <p>Year :{movie.year}</p>
            <p>Rating : {movie.rating}</p>

            {isWishlisted?(
                <button onClick={()=>onRemove(movie.id)}>
                    ❌Remove form Wishlist
                </button>
            ):(
                <button onClick={() => onAdd(movie)}>
                   💖 Add to Wishlist
                </button>
            )}
        </div>
    );
}

export default MovieCard;