"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimeCardData } from "@/types/anime";
import AnimeCard from "./AnimeCard";
import { exploreTitles } from "@/translate/explore";
import { ExploreTitleKey } from "@/translate/explore";

interface AnimeRowProps {
    titleKey: ExploreTitleKey;
    animes: AnimeCardData[];
}

const AnimeRow = ({ titleKey, animes }: AnimeRowProps) => {
    const { lang } = useLanguage();
    const displayTitle = exploreTitles[titleKey][lang];
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = () => {
        const container = scrollRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
            container.scrollLeft + container.clientWidth < container.scrollWidth - 1
        );
    };

    useEffect(() => {
        updateScrollState();
        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", updateScrollState);
        window.addEventListener("resize", updateScrollState);
        return () => {
            container.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, [animes]);

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;
        const amount = container.clientWidth * 0.8;
        container.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <section className="mb-8 relative">
            <h2 className="font-heading font-black text-xl mb-4 px-6 flex items-center gap-2">
                <span className="text-red-500">■</span> {displayTitle}
            </h2>

            {canScrollLeft && (
                <button
                    onClick={() => scroll("left")}
                    aria-label="Rolar para a esquerda"
                    className="cursor-pointer absolute left-2 top-1/2 z-10 -translate-y-1/2 border-3 border-black bg-white p-2 shadow-[4px_4px_0_0_#111111]"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
            )}

            <div ref={scrollRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
                {animes.map((anime) => (
                    <AnimeCard anime={anime} key={anime.malId} className="snap-start" />
                ))}
            </div>

            {canScrollRight && (
                <button
                    onClick={() => scroll("right")}
                    aria-label="Rolar para a direita"
                    className="curor-pointer absolute right-2 top-1/2 z-10 -translate-y-1/2 border-3 border-black bg-white p-2 shadow-[4px_4px_0_0_#111111]"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            )}
        </section>
    );
};

export default AnimeRow;