"use client";

import { useLenguage } from "@/hooks/useLenguage";
import { feature, featureHero } from "@/translate/feature"

const FeaturePanels = () => {

    const sizeClasses: Record<string, string> = {
        big: "col-span-2 row-span-2",
        wide: "col-span-2",
        "": "",
    }

    const { lang } = useLenguage();

    return (
        <section className="px-12 pb-24">
            <div className="max-w-140 mx-auto text-center mb-11">
                <h2 className="font-heading text-3xl md:text-4xl mb-2.5">{lang === "pt" ? featureHero.titlePt : featureHero.titleJa}</h2>
                <p className="text-graphite text-base">{lang === "pt" ? featureHero.descriptionPt : featureHero.descriptionJa}</p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-3.5 max-w-245 mx-auto">
                {feature.map((item, index) => {
                    const title = lang === "pt" ?item.titlePt : item.titleJa
                    const description = lang === "pt" ?item.descriptionPt : item.descriptionJa
                    return (
                        <div
                            key={index}
                            className={`border-3 border-black p-5.5 bg-background transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-red)] ${sizeClasses[item.size]}`}
                        >
                            <span className="font-mono text-red text-[12px] block mb-2.5">{item.id}</span>
                            <h3 className="font-heading text-base mb-2">{title}</h3>
                            <p className="text-graphite text-sm leading-relaxed">{description}</p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default FeaturePanels
