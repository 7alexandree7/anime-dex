"use client";

import DecryptedText from "@/components/motion/DecryptedText";
import Link from "next/link";
import Technologies from "./Technologies";
import ProductPreview from "./ProductPreview";

const Hero = () => {
    return (
        <section className="relative text-center px-12 pb-16 overflow-hidden">
            <span className="font-mono inline-block text-xs tracking-tight leading-tight max-w-3xl mx-auto px-3 py-1.5 mb-7 border-2 border-black">
                ENTRY N.° 000 — ANIMEDEX
            </span>

            <h1 className="font-heading text-5xl md:text-6xl leading-tight tracking-tight max-w-3xl mx-auto mb-5">
                <span>
                    <DecryptedText
                        text="Sua lista de anime,"
                        revealDirection="start"
                        sequential
                        useOriginalCharsOnly={false}
                        animateOn="view"
                        speed={30}
                        style={{ display: "inline-block" }}
                    />{" "}
                </span>
                <span className="bg-red text-background px-2 -rotate-3 inline-block">
                    <DecryptedText
                        text="catalogada."
                        revealDirection="start"
                        sequential
                        useOriginalCharsOnly={false}
                        animateOn="view"
                        speed={30}
                    />
                </span>
            </h1>

            <p className="text-graphite text-lg max-w-md mx-auto my-10">
                Busque qualquer anime, acompanhe seu progresso episódio por episódio
                e organize tudo por status — sem depender de planilha.
            </p>

            <div className="flex gap-3.5 justify-center items-center mb-11">
                <Link
                    href="/login"
                    className="bg-red text-white border-3 border-black px-6 py-3 font-bold shadow-[3px_3px_0_black] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_black] transition-all cursor-pointer">
                    Começar agora
                </Link>
                <Link
                    href="https://github.com/7alexandree7/anime-dex"
                    className="border-3 border-black bg-background px-6 py-3 font-bold cursor-pointer">
                    Ver no GitHub
                </Link>
            </div>
            <Technologies />
            <ProductPreview />
        </section>
    )
}

export default Hero
