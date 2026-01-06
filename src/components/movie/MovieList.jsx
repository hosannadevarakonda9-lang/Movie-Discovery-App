import movies from "../../data/movies.js";

 const MovieList = ()=>{
    return(
        <div>
            <h2>MovieList</h2>

            {movies.map((movie)=>(
                <div key={movie.id} style={{marginBottom:"10px"}}>
                    <h3>{movie.title}</h3>
                    <p>Year : {movie.year}</p>
                    <p>Rating : {movie.rating}</p>
                </div>
            ))}
        </div>
    );
 }

 export default MovieList;