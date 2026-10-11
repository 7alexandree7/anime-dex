import Link from "next/link"
import DashboardAnimeCard from "./DashboardAnimeCard"
import { DashboardListItem } from "@/types/dashboard";
import SeeAllAnimesHeader from "./SeeAllAnimesHeader";

interface SeeAllAnimesProps {
    animes: DashboardListItem[]
    label: string
    total: number
}


const SeeAllAnimes = ({ animes, label, total }: SeeAllAnimesProps) => {

    const buttonClass =
        "inline-block border-2 border-[#111111] bg-[#F7F4ED] px-3 py-1.5 font-mono text-[11px] uppercase text-[#111111] shadow-[3px_3px_0_#111111] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5";

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">

            <SeeAllAnimesHeader label={label} total={total} />

            {animes.length === 0 ? (
                <section className="mt-8 border-[3px] border-dashed border-[#111111] px-4 py-10 text-center">
                    <h2 className="text-xl font-black uppercase text-[#111111]">
                        Nenhum anime em {label}
                    </h2>
                    <p className="mt-2 text-sm text-[#111111]">
                        Adicione animes pela página de detalhe e eles aparecem aqui.
                    </p>
                    <Link href="/explore" className={`${buttonClass} mt-4`}>
                        Explorar animes
                    </Link>
                </section>
            ) : (
                <>
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {animes.map((anime) => (
                            <DashboardAnimeCard key={anime.malId} anime={anime} />
                        ))}
                    </div>

                    <nav
                        aria-label="Paginação"
                        className="mt-10 flex items-center justify-between gap-4 border-t-[3px] border-[#111111] pt-4"
                    >
                        <span className={`${buttonClass} opacity-40 shadow-none`}>
                            ← Anterior
                        </span>

                        <span className="font-mono text-xs uppercase text-[#111111]">
                            Pág. 1 / 4
                        </span>

                        <span className={buttonClass}>Próxima →</span>
                    </nav>
                </>
            )}
        </main>
    )
}

export default SeeAllAnimes
