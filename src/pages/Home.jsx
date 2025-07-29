import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Mock data for testing
    if (process.env.NODE_ENV === 'test') {
      setMovies([
        { id: 1, title: "Doctor Strange", time: 115, genres: ["Action"] },
        { id: 2, title: "Trolls", time: 92, genres: ["Animation"] },
        { id: 3, title: "Jack Reacher", time: 118, genres: ["Action"] }
      ]);
      return;
    }

    fetch("http://localhost:3000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default Home;