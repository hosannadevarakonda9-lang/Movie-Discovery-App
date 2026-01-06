import movies from "../../data/movies.js";
import MovieCard from "./MovieCard.jsx";
import { useState, useEffect } from "react";

const MovieList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [wishlist, setWishlist] = useState([]);

    console.log(wishlist)

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

// load  wishlish from localstorage

useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
}, []);

//  save wishlist to localstorage

useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

const addToWishlist = (movie) => {
  if (!wishlist.find((item) => item.id === movie.id)) {
    setWishlist([...wishlist, movie]);
  }
};

const removeFromWishlist = (movieId) => {
  setWishlist(wishlist.filter((movie) => movie.id !== movieId));
};

return (
    <div>
        <h2>MovieList</h2>

        <input type="text"
            placeholder="Search Movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
                padding: "8px",
                width: "100%",
                maxWidth: "300px",
                marginBottom: "16px",
                outline: "none"
            }}
        />

        {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
                <MovieCard 
                 key={movie.id}
                 movie={movie}
                 isWishlisted ={wishlist.some((item)=>item.id === movie.id)}
                 onAdd = {addToWishlist}
                 onRemove = {removeFromWishlist}
                 />
            ))
        ) : (
            <p>No Movies Found</p>
        )}
    </div>
);
};

export default MovieList;