import Link from "next/link";
import Image from "next/image";
import { AnimeCardData } from "@/types/anime";

interface AnimeCardProps {
    anime: AnimeCardData
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
    return (
        <Link
            href={`/explore/${anime.mailId}`}
            className="shrink-0 w-37 border-3 border-black bg-white transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-red)]">

            <div className="relative h-50 border-b-3 border-black overflow-hidden">
                <Image
                    src={anime.imageUrl}
                    alt={anime.title.english}
                    fill
                    className="object-cover"
                    sizes="148px"
                />
            </div>
            <div className="p-2.5">
                <p className="text-[12.5px] font-bold leading-tight line-clamp-2 mb-1">
                    {anime.title.english}
                </p>
                <p className="text-[10px] text-graphite">
                    {anime.episodes ? `${anime.episodes} eps` : "Em exibição"}
                </p>
            </div>
        </Link>
    )
}

export default AnimeCard
