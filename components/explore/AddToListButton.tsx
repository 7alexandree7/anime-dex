"use client";

import { addToList, removeFromList } from "@/app/actions/anime-list";
import { AnimeStatus } from "@/lib/generated/prisma/enums";
import { Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AddToListButtonProps {
    malId: number;
    title: string;
    imageUrl: string;
    totalEpisodes: number | null;
    initialStatus: AnimeStatus | null
}

const STATUS_OPTIONS: { value: AnimeStatus; label: string }[] = [
    { value: "WATCHING", label: "Assistindo" },
    { value: "COMPLETED", label: "Completo" },
    { value: "PLAN_TO_WATCH", label: "Quero Assistir" },
    { value: "DROPPED", label: "Dropado" },
];


export function AddToListButton({ malId, title, imageUrl, totalEpisodes, initialStatus }: AddToListButtonProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedStatus, setSelectedStatus] = useState<AnimeStatus | null>(initialStatus || null);
    const [isPending, setIsPending] = useState<boolean>(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleClickOutSide = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) setIsOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutSide);
        return () => document.removeEventListener("mousedown", handleClickOutSide);
    }, []);

    const handleSelect = async (status: AnimeStatus) => {
        setIsPending(true);

        try {
            await addToList({ malId, title, imageUrl, totalEpisodes, status });
            setSelectedStatus(status);
            setIsOpen(false);
        } catch (error) {
            console.error("Erro ao adicionar à lista:", error);
        } finally {
            setIsPending(false);
        }
    }

    const handleRemove = async () => {
        setIsPending(true);

        try {
            await removeFromList(malId);
            setSelectedStatus(null);
            setIsOpen(false);
        } catch (error) {
            console.error("Erro ao remover da lista:", error);
        } finally {
            setIsPending(false);
        }
    }


    const currentLabel = STATUS_OPTIONS.find((o) => o.value === selectedStatus)?.label;

    return (
        <div ref={popoverRef} className="relative">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                disabled={isPending}
                className="cursor-pointer border-3 border-black bg-[#E8352C] px-6 py-3 font-heading text-sm font-black uppercase text-white shadow-[4px_4px_0_0_#111111] transition-transform hover:-translate-y-1 disabled:opacity-60"
            >
                {currentLabel ? `✓ ${currentLabel}` : "+ Adicionar à lista"}
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full z-20 mt-2 border-3 border-black bg-white shadow-[4px_4px_0_0_#111111]">
                    {STATUS_OPTIONS.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className="cursor-pointer block w-full whitespace-nowrap border-b border-black px-5 py-2 text-left font-mono text-xs uppercase last:border-b-0 hover:bg-gray-100"
                        >
                            {option.label}
                        </button>
                    ))}

                    {selectedStatus && (
                        <button
                            onClick={handleRemove}
                            className="cursor-pointer block w-full whitespace-nowrap border-t-2 border-black px-5 py-2 text-left font-mono text-xs uppercase text-[#E8352C] hover:bg-gray-100"
                        >
                            <div className="flex items-center gap-2">
                                <p> <Trash size={16} className="" /></p>
                                <p> Remover da lista</p>
                            </div>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}