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
                <div className="flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:justify-start sm:overflow-x-auto pb-4">
                    {animes.map((anime) => (
                        <AnimeCard key={anime.malId} anime={anime} />
                    ))}
                </div>
            </section>
        )
    }

    export default AnimeRow
