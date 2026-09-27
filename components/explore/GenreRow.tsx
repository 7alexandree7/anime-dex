import { AnimeCardData } from "@/types/anime";
import { AnilistMedia, AnilistPageResponse } from "@/types/anilist";
import AnimeRow from "./AnimeRow";
import { ExploreTitleKey } from "@/translate/explore";
import { ANILIST_QUERY } from "@/graphql/query";

interface GenreRowProps {
    titleKey: ExploreTitleKey;
    genre: string;
}


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
            malId: anime.idMal as number,
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
