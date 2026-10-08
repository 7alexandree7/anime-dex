"use client";

import Link from "next/link";
import { DashboardListItem, STATUS_SLUGS } from "@/types/dashboard";
import DashboardAnimeCard from "./DashboardAnimeCard";
import { AnimeStatus } from "@/lib/generated/prisma/enums";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryRowProps {
  status: AnimeStatus;
  label: string;
  total: number;
  items: DashboardListItem[];
}

const CategoryRow = ({ status, label, total, items }: CategoryRowProps) => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const updateScrollState = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth <
      container.scrollWidth - 1
    )
  }

  useEffect(() => {
    updateScrollState()
    const container = scrollRef.current
    if (!container) return

    container.addEventListener("scroll", updateScrollState)
    window.addEventListener("resize", updateScrollState)

    return () => {
      container.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [items])

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
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading font-black text-xl flex items-center gap-2">
          <span className="text-[#E8352C]">■</span> {label}
        </h2>
        {total > 10 && (
          <Link
            href={`/dashboard/${STATUS_SLUGS[status]}`}
            className="font-mono text-[10px] uppercase border-b-2 border-black hover:text-[#E8352C] hover:border-[#E8352C]"
          >
            Ver todos ({total}) →
          </Link>
        )}
      </div>

      {items.length === 0 ? (
        <div className="border-3 border-dashed border-black/30 p-8 text-center">
          <p className="font-mono text-xs text-black/50 uppercase">Nada por aqui ainda</p>

        </div>
      ) : (
        <>
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
            {items.map((anime) => (
              <DashboardAnimeCard key={anime.malId} anime={anime} />
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Rolar para a direita"
              className="cursor-pointer absolute right-2 top-1/2 z-10 -translate-y-1/2 border-3 border-black bg-white p-2 shadow-[4px_4px_0_0_#111111]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default CategoryRow;