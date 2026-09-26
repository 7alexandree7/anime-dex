import { AnimeCardData } from "@/types/anime";
import { AnilistMedia, AnilistPageResponse } from "@/types/anilist";
import AnimeRow from "./AnimeRow";
import { ExploreTitleKey } from "@/translate/explore";

interface GenreRowProps {
    titleKey: ExploreTitleKey;
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
            title: { english: anime.title.english ?? anime.title.romaji, romaji: anime.title.romaji },
            imageUrl: anime.coverImage.large,
            episodes: anime.episodes
        }))
}


const GenreRow = async ({ titleKey, genre }: GenreRowProps) => {

    const animes = await getAnimeByGenre(genre)

    if (animes.length === 0) return <p>Carregando...</p>;

    return <AnimeRow titleKey={titleKey} animes={animes} />
}

export default GenreRow
