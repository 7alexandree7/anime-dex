import { featureList } from "@/const/FeatureList"


const FeaturePanels = () => {

    const sizeClasses: Record<string, string> = {
        big: "col-span-2 row-span-2",
        wide: "col-span-2",
        "": "",
    }

    return (
        <section className="px-12 pb-24">
            <div className="max-w-140 mx-auto text-center mb-11">
                <h2 className="font-heading text-3xl md:text-4xl mb-2.5">O que o AnimeDex resolve</h2>
                <p className="text-graphite text-base">
                    Cada entrada é uma peça do sistema — dados sempre atualizados, nada de planilha desatualizada.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-3.5 max-w-245 mx-auto">
                {featureList.map((feature, index) => ([
                    <div
                     key={index}
                     className={`border-3 border-black p-5.5 bg-background transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-red)] ${sizeClasses[feature.size]}`}
                     >
                        <span className="font-mono text-red text-[12px] block mb-2.5">{feature.id}</span>
                        <h3 className="font-heading text-base mb-2">{feature.title}</h3>
                        <p className="text-graphite text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ]))}

            </div>
        </section>
    )
}

export default FeaturePanels
