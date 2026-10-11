import Link from "next/link"


const SeeAllAnimesHeader = ({ label, total }: { label: string, total: number }) => {

    const buttonClass =
        "inline-block border-2 border-[#111111] bg-[#F7F4ED] px-3 py-1.5 font-mono text-[11px] uppercase text-[#111111] shadow-[3px_3px_0_#111111] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5";
        
    return (
        <>
            <Link href="/dashboard" className={buttonClass}>
                ← Dashboard
            </Link>
            <header className="mt-6 flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-[#111111] pb-4">
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#E8352C]">
                        {"// Categoria"}
                    </p>
                    <h1 className="mt-1 text-4xl font-black uppercase leading-none tracking-tight text-[#111111] sm:text-5xl">
                        {label}
                    </h1>
                </div>
                <div className="-rotate-2 border-[3px] border-[#E8352C] px-3 py-1 font-mono text-sm uppercase text-[#E8352C]">
                    {total} {total === 1 ? "anime" : "animes"}
                </div>
            </header>
        </>
    )
}

export default SeeAllAnimesHeader
