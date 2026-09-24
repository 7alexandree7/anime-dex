import AnimeCard from "./AnimeCard";
import { AnimeCardData } from "@/types/anime";
import { AnilistMedia, AnilistPageResponse } from "@/types/anilist";

interface GenreRowProps {
    title: string;
    genre: string;
}


const ANILIST_QUERY = `
  query ($genre: String) {
    Page(page: 1, perPage: 14) {
      media(genre: $genre, type: ANIME, sort: POPULARITY_DESC) {
        id
        idMal
        title {
          romaji
          english
        }
        episodes
        coverImage {
          large
        }
      }
    }
  }
`;

async function getAnimeByGenre(genre: string): Promise<AnimeCardData[]> {
    const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: ANILIST_QUERY,
            variables: { genre },
        }),
        next: { revalidate: 3600 }, // 1 hour
    })

    if (!response.ok) {
        console.log("Erro ao buscar animes:", await response.text());
        return [];
    }

    const json: AnilistPageResponse = await response.json();
    const mediaList = json.data.Page.media;

    return mediaList
        .filter((anime) => anime.idMal !== null)
        .map((anime: AnilistMedia) => ({
            mailId: anime.idMal as number,
            title: anime.title.english || anime.title.romaji,
            imageUrl: anime.coverImage.large,
            episodes: anime.episodes
        }))
}


const GenreRow = async ({ title, genre }: GenreRowProps) => {

    const animes = await getAnimeByGenre(genre)

    if (animes.length === 0) return <p>Carregando...</p>;

    return (
        <section className="mb-8">
            <h2 className="font-heading font-black text-xl mb-4 px-6 flex items-center gap-2">
                <span className="text-red-500">■</span> {title}
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:justify-start sm:overflow-x-auto pb-4">
                {animes.map((anime) => (
                    <AnimeCard key={anime.mailId} anime={anime} />
                ))}
            </div>
        </section>
    )
}

export default GenreRow
