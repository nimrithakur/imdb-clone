function MovieCard({ poster, title, year, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-64 hover:scale-105 transition-transform duration-300">
      
      <img
        src={poster}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="text-gray-600 text-sm">Release Year: {year}</p>

        <p className="mt-2 font-bold text-yellow-500">
           {rating}
        </p>
      </div>

    </div>
  );
}

export default MovieCard;
