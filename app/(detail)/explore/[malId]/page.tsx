import AnimeDetailHero from "@/components/explore/AnimeDetailHero";
import { ANIME_DETAIL_QUERY } from "@/graphql/query";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AnilistMediaResponse } from "@/types/anilist";
import { AnimeDetailData } from "@/types/anime";
import { notFound, redirect } from "next/navigation";
import { headers } from "next/headers";

interface ExplorePageDetailsProps {
  params: Promise<{ malId: string }>
}


function cleanDescription(raw: string | null): string | null {
  if (!raw) return null;
  return raw
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?i>/gi, "")
    .replace(/<\/?b>/gi, "")
    .trim();
}

async function getAnimeDetails(malId: number): Promise<AnimeDetailData | null> {

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: ANIME_DETAIL_QUERY,
      variables: { malId },
    }),
    next: { revalidate: 3600 }, // 1 hour
  });

  if (!response.ok) {
    console.log("Erro ao buscar detalhes do anime:", await response.text());
    return null;
  }

  const json: AnilistMediaResponse = await response.json();
  const media = json.data.Media;

  if (!media) return null;

  return {
    malId: media.idMal,
    title: {
      english: media.title.english,
      romaji: media.title.romaji,
    },
    description: cleanDescription(media.description),
    bannerImage: media.bannerImage,
    coverImage: media.coverImage.extraLarge,
    coverColor: media.coverImage.color,
    genres: media.genres,
    averageScore: media.averageScore,
    popularity: media.popularity,
    favourites: media.favourites,
    episodes: media.episodes,
    duration: media.duration,
    status: media.status,
    format: media.format,
    season: media.season,
    seasonYear: media.seasonYear,
    studio: media.studios.nodes[0]?.name ?? null,
    trailerUrl:
      media.trailer?.site === "youtube"
        ? `https://www.youtube.com/watch?v=${media.trailer.id}`
        : null,
  };
}


const ExplorePageDetails = async ({ params }: ExplorePageDetailsProps) => {

  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/login');
  const userId = session?.user?.id
  const { malId } = await params;
  const animeDetails = await getAnimeDetails(Number(malId));

  if (!animeDetails) return notFound();

  const getStatusAnime = await prisma.userAnimeList.findUnique({
    where: { userId_malId: { userId, malId: animeDetails.malId } },
    select: { status: true }
  })


  return <AnimeDetailHero anime={animeDetails} status={getStatusAnime?.status ?? null} />
}


export default ExplorePageDetails
