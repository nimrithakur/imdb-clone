import MovieCard from "./components/MovieCard";
import movies from "./data/movies";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
         Movie Collection
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
