import Link from "next/link";
import Image from "next/image";
import { DashboardListItem } from "@/types/dashboard";

interface DashboardAnimeCardProps {
    anime: DashboardListItem;
}

const DashboardAnimeCard = ({ anime }: DashboardAnimeCardProps) => {
    return (
        <Link
            href={`/explore/${anime.malId}`}
            className="shrink-0 w-37 border-3 border-black bg-white transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-red)]"
        >
            <div className="relative h-50 border-b-3 border-black overflow-hidden">
                <Image src={anime.imageUrl} alt={anime.title} fill className="object-cover" sizes="148px" />
            </div>
            <div className="p-2.5">
                <p className="text-[12.5px] font-bold leading-tight line-clamp-2 mb-1 min-h-7.5">
                    {anime.title}
                </p>
                <p className="text-[10px] text-black/50">
                    {anime.totalEpisodes ? `${anime.totalEpisodes} eps` : "Em exibição"}
                </p>
            </div>
        </Link>
    );
};

export default DashboardAnimeCard;
