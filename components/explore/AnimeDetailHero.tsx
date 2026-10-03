"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimeDetailData } from "@/types/anime";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AddToListButton } from "./AddToListButton";

interface AnimeDetailHeroProps {
    anime: AnimeDetailData
}

const AnimeDetailHero = ({ anime }: AnimeDetailHeroProps) => {

    const { lang } = useLanguage()

    const displayTitle = lang === "pt" ? anime.title.english ?? anime.title.romaji : anime.title.romaji
    const score = anime.averageScore ? (anime.averageScore / 10).toFixed(1) : "-"

    return (
        <main className="bg-background pb-16">

            <div className="relative h-65 w-full overflow-hidden border-b-3 border-black md:h-100">
                {anime.bannerImage ? (
                    <Image
                        src={anime.bannerImage}
                        alt={displayTitle}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div
                        className="h-full w-full"
                        style={{ backgroundColor: anime.coverColor ?? "#111111" }}
                    />
                )}
                <Link
                    href="/explore"
                    aria-label="Voltar para explorar"
                    className="absolute left-4 top-4 z-10 border-3 border-black bg-white p-2 shadow-[4px_4px_0_0_#111111] transition-transform hover:-translate-y-1"
                >
                    <ArrowLeft className="h-5 w-5 text-black" />
                </Link>
            </div>

            <div className="relative z-10 mx-auto -mt-20 max-w-5xl px-6 md:-mt-28">
                <div className="flex flex-col gap-6 md:flex-row md:items-end">

                    <div className="relative h-56 w-40 shrink-0 border-3 border-black bg-white shadow-[6px_6px_0_0_#111111] md:h-72 md:w-52">
                        <Image
                            src={anime.coverImage}
                            alt={displayTitle}
                            fill
                            sizes="(max-width: 768px) 160px, 208px"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-1 pb-2">
                        <h1 className="font-heading text-3xl font-black leading-none md:text-5xl">{displayTitle}</h1>

                        <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wide">
                            <span className="border border-black bg-white px-2 py-1">{anime.format}</span>
                            <span className="border border-black bg-white px-2 py-1">{anime.status}</span>
                            {anime.season && anime.seasonYear && <span className="border border-black bg-white px-2 py-1">{`${anime.season} ${anime.seasonYear}`}</span>}
                            {anime.episodes && <span className="border border-black bg-white px-2 py-1">{`${anime.episodes} EPS`}</span>}
                            {anime.duration && <span className="border border-black bg-white px-2 py-1">{`${anime.duration} MIN`}</span>}
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 md:max-w-md">
                    <div className="border-3 border-black bg-white p-3 text-center">
                        <p className="font-heading text-2xl font-black text-[#E8352C]">{score}</p>
                        <p className="font-mono text-[10px] uppercase tracking-wide">Nota</p>
                    </div>
                    <div className="border-3 border-black bg-white p-3 text-center">
                        <p className="font-heading text-2xl font-black">{anime.popularity}</p>
                        <p className="font-mono text-[10px] uppercase tracking-wide">Popularidade</p>
                    </div>
                    <div className="border-3 border-black bg-white p-3 text-center">
                        <p className="font-heading text-2xl font-black">{anime.favourites}</p>
                        <p className="font-mono text-[10px] uppercase tracking-wide">Favoritos</p>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {anime.genres.map((genre) => (
                        <span
                            key={genre}
                            className="border-2 border-[#E8352C] px-3 py-1 font-mono text-xs uppercase text-[#E8352C]"   >
                            {genre}</span>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    <AddToListButton malId={anime.malId} title={displayTitle} imageUrl={anime.coverImage} totalEpisodes={anime.episodes} />
                    {anime.trailerUrl && (
                        <Link
                            href={anime.trailerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-3 border-black bg-white px-6 py-3 font-heading text-sm font-black uppercase shadow-[4px_4px_0_0_#111111] transition-transform hover:-translate-y-1"
                        >
                            ▶ Trailer
                        </Link>
                    )}
                </div>

                {anime.description && (
                    <div className="relative mt-10 border-3 border-black bg-white p-6">
                        <span className="absolute -top-3 left-4 border border-black bg-white px-2 font-mono text-xs uppercase">
                            Sinopse
                        </span>
                        <p className="whitespace-pre-line font-body leading-relaxed">
                            {anime.description}
                        </p>
                    </div>
                )}

                {anime.studio && (
                    <p className="mt-4 font-mono text-xs uppercase tracking-wide">
                        Estúdio: {anime.studio}
                    </p>
                )}

            </div>
        </main >
    )
}

export default AnimeDetailHero
