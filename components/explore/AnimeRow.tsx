"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { AnimeCardData } from "@/types/anime";
import AnimeCard from "./AnimeCard";
import { exploreTitles } from "@/translate/explore";
import { ExploreTitleKey } from "@/translate/explore";

interface AnimeRowProps {
    titleKey: ExploreTitleKey
    animes: AnimeCardData[];
}

const AnimeRow = ({ titleKey, animes }: AnimeRowProps) => {

    const { lang } = useLanguage()
    const displayTitle = exploreTitles[titleKey][lang]

    return (
        <section className="mb-8">
            <h2 className="font-heading font-black text-xl mb-4 px-6 flex items-center gap-2">
                <span className="text-red-500">■</span> {displayTitle}
            </h2>
            <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
                {animes.map((anime) => (
                    <div key={anime.malId} className="snap-start">
                        <AnimeCard anime={anime} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AnimeRow
