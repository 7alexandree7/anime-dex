import GenreRow from "@/components/explore/GenreRow";

const ExplorePage = () => {
  return (
    <main className="pt-8 pb-16">
      <GenreRow title="Açao" genre="Action" />
      <GenreRow title="Aventura" genre="Adventure" />
      <GenreRow title="Fantasia" genre="Fantasy" />
      <GenreRow title="Romance" genre="Romance" />
      <GenreRow title="Drama" genre="Drama" />
      <GenreRow title="Comedia" genre="Comedy" />
      <GenreRow title="Misterio" genre="Mystery" />
      <GenreRow title="Slice of Life" genre="Slice of Life" />
      <GenreRow title="Esporte" genre="Sports" />
      <GenreRow title="Ecchi" genre="Ecchi" />
    </main>
  );
};

export default ExplorePage;