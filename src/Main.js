import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

export default function Main({ tempMovieData, tempWatchedData }) {
  return (
    <>
      <main className="main">
        <ListBox tempMovieData={tempMovieData} />
        <WatchedBox tempWatchedData={tempWatchedData} />
      </main>
    </>
  );
}
