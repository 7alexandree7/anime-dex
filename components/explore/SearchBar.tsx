"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { AnimeCardData } from "@/types/anime";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = () => {
    const router = useRouter();
    const [term, setTerm] = useState("");
    const [results, setResults] = useState<AnimeCardData[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (term.length < 4) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setResults([]);
            setIsOpen(false);
            return;
        }

        const timeoutId = setTimeout(async () => {
            const response = await fetch(`/api/search-anime?q=${encodeURIComponent(term)}`);
            const data: AnimeCardData[] = await response.json();
            setResults(data);
            setIsOpen(true);
        }, 400);

        return () => clearTimeout(timeoutId); // cancela a busca anterior a cada nova tecla
    }, [term]);

    const handleSelect = (malId: number) => {
        setTerm("");
        setIsOpen(false);
        router.push(`/explore/${malId}`);
    };

    return (
        <div className="relative mx-auto w-ull max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Buscar anime..."
                className="w-full border-3 border-black bg-white py-2 pl-10 pr-4 font-mono"
            />

            {isOpen && results.length > 0 && (
                <ul className="absolute z-20 mt-1 w-full border-3 border-black bg-white">
                    {results.map((anime) => (
                        <li
                            key={anime.malId}
                            onMouseDown={() => handleSelect(anime.malId)}
                            className="flex cursor-pointer items-center gap-3 border-b border-black px-3 py-2 last:border-b-0 hover:bg-gray-100"
                        >
                            <div className="relative h-14 w-10 shrink-0 overflow-hidden border border-black">
                                <Image
                                    src={anime.imageUrl}
                                    alt={anime.title.english || anime.title.romaji}
                                    fill
                                    sizes="40px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="truncate font-mono text-sm">
                                    {anime.title.english || anime.title.romaji}
                                </p>
                                <p className="text-xs text-black/60">
                                    {anime.episodes ? `${anime.episodes} EP` : "—"}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default SearchBar