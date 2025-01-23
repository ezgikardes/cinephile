import ListBox from "../features/movie-list/ListBox";
import WatchedBox from "../features/watched-movies/WatchedBox";

export default function Main({ tempWatchedData, movies }) {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
}
