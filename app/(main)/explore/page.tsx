import GenreRow from "@/components/explore/GenreRow";
import TopAnimeRow from "@/components/explore/TopAnimeRow";

const ExplorePage = () => {
  return (
    <main className="pt-8 pb-16">
      <TopAnimeRow titleKey="topAnimes" />
      <GenreRow titleKey="action" genre="Action" />
      <GenreRow titleKey="adventure" genre="Adventure" />
      <GenreRow titleKey="fantasy" genre="Fantasy" />
      <GenreRow titleKey="romance" genre="Romance" />
      <GenreRow titleKey="drama" genre="Drama" />
      <GenreRow titleKey="comedy" genre="Comedy" />
      <GenreRow titleKey="mystery" genre="Mystery" />
      <GenreRow titleKey="sliceOfLife" genre="Slice of Life" />
      <GenreRow titleKey="sports" genre="Sports" />
      <GenreRow titleKey="ecchi" genre="Ecchi" />
      <GenreRow titleKey="supernatural" genre="Supernatural" />
    </main>
  );
};

export default ExplorePage;