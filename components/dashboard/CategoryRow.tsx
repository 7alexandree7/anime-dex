import Link from "next/link";
import { DashboardListItem, STATUS_SLUGS } from "@/types/dashboard";
import DashboardAnimeCard from "./DashboardAnimeCard";
import { AnimeStatus } from "@/lib/generated/prisma/enums";

interface CategoryRowProps {
  status: AnimeStatus;
  label: string;
  total: number;
  items: DashboardListItem[];
}

const CategoryRow = ({ status, label, total, items }: CategoryRowProps) => {
  return (
    <section className="mb-10">
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
          <Link
            href="/explore"
            className="inline-block mt-3 font-mono text-[10px] uppercase border-b-2 border-[#E8352C] text-[#E8352C]"
          >
            Explorar animes →
          </Link>
        </div>
      ) : (
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-0 pb-2">
          {items.map((anime) => (
            <DashboardAnimeCard key={anime.malId} anime={anime} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryRow;