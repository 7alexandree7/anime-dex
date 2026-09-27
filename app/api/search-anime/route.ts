import { NextRequest, NextResponse } from "next/server";
import { AnilistMedia, AnilistPageResponse } from "@/types/anilist";
import { AnimeCardData } from "@/types/anime";
import { SEARCH_QUERY } from "@/graphql/query";


export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get("q");

    if (!search || search.length < 4) return NextResponse.json([]);

    const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: SEARCH_QUERY,
            variables: { search },
        })
    })

    if (!response.ok) return NextResponse.json([]);

    const json: AnilistPageResponse = await response.json();

    const results: AnimeCardData[] = json.data.Page.media
        .filter((anime) => anime.idMal !== null)
        .map((anime: AnilistMedia) => ({
            malId: anime.idMal as number,
            title: {
                english: anime.title.english ?? anime.title.romaji ?? "",
                romaji: anime.title.romaji ?? "",
            },
            imageUrl: anime.coverImage.large,
            episodes: anime.episodes ?? 0,
        }));

    return NextResponse.json(results);
}