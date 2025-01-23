import Logo from "../features/navbar/Logo";
import NumResults from "../features/navbar/NumResults";
import Search from "../features/navbar/Search";

export default function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}
