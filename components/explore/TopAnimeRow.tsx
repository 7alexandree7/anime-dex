import { AnimeCardData } from "@/types/anime";
import { AnilistMedia, AnilistPageResponse } from "@/types/anilist";
import AnimeRow from "./AnimeRow";
import { ExploreTitleKey } from "@/translate/explore";

interface TopAnimeRowProps {
    titleKey: ExploreTitleKey
}

const TOP_ANIMES_QUERY = `
query {
  Page(page: 1, perPage: 14) {
    media(type: ANIME, sort: POPULARITY_DESC) {
      id
      idMal
      title { romaji english }
      episodes
      coverImage { large }
    }
  }
}
`

async function getPopularAnimes(): Promise<AnimeCardData[]> {
    const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: TOP_ANIMES_QUERY,
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


const TopAnimeRow = async ({ titleKey }: TopAnimeRowProps) => {

    const animes = await getPopularAnimes()

    if (animes.length === 0) return <p>Carregando...</p>;

    return <AnimeRow titleKey={titleKey} animes={animes} />
    
}

export default TopAnimeRow
