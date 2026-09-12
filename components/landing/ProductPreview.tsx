import { status } from "@/translate/statust"
import { useLenguage } from "@/hooks/useLenguage"
import { suggestionsTranslate } from "@/translate/sugesion";

const ProductPreview = () => {

    const { lang } = useLenguage();
    const t = suggestionsTranslate[lang]

    return (
        <section className="px-12  pt-8 pb-24 flex flex-col items-center">
            <div className="w-full max-w-170 bg-white border-black border-3 shadow-[8px_8px_0_black]">

                <div className="flex gap-1.5 px-4 py-3 border-b-3 border-black">
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-2.5 border-2 border-black px-3.5 py-3 text-graphite text-sm">

                        <span>🔍</span> <span>{t[0].initial}</span>
                    </div>

                    <div className="border-2 border-black border-t-0">
                        {suggestionsTranslate[lang].map((t, index) => (
                            <div key={index}>
                                <div
                                    key={t.exampleAnime}
                                    className="flex items-center gap-3 px-3.5 py-2.5 border-black/10  text-sm"
                                >
                                    <div className="w-7.5 h-10.5 border-2 border-black" style={{ backgroundColor: t.color }}></div>

                                    <div>
                                        <p className="font-bold text-graphite text-start">{t.exampleAnime}</p>
                                        <p className="text-graphite text-xs text-start">{t.episodes}</p>
                                    </div>
                                </div>
                                <div
                                    key={t.exampleAnime2}
                                    className="flex items-center gap-3 px-3.5 py-2.5 border-black/10  text-sm"
                                >
                                    <div className="w-7.5 h-10.5 border-2 border-black" style={{ backgroundColor: t.color }}></div>

                                    <div>
                                        <p className="font-bold text-graphite text-start">{t.exampleAnime2}</p>
                                        <p className="text-graphite text-xs text-start">{t.episodes2}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="flex gap-2 mt-5 flex-wrap">
                        {status.map((s, index) => (
                            <div
                                key={index}
                                className={`text-xs font-bold border-2 border-black px-3.5 py-1.5 ${s.active ? "bg-red text-white" : "bg-background text-graphite"}`}
                            >
                                {lang === "pt" ? s.labelPt : s.labelJa}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="font-mono text-xs text-graphite mt-4">{t[0].text}</p>
        </section>
    )
}

export default ProductPreview
