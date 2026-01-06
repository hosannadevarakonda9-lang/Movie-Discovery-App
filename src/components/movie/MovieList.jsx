import movies from "../../data/movies.js";
import MovieCard from "./MovieCard.jsx";
import { useState } from "react";

const MovieList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = movies.filter((movie)=>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <h2>MovieList</h2>

            <input type="text"
                placeholder="Search Movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                style = {{
                    padding:"8px",
                    width:"100%",
                    maxWidth:"300px",
                    marginBottom:"16px",
                    outline: "none"
                }}
            />

                {filteredMovies.length>0?(
                    filteredMovies.map((movie)=>(
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                ):(
                    <p>No Movies Found</p>
                )}
        </div>
    );
}

export default MovieList;