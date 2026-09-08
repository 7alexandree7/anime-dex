import { suggestionsList } from "@/const/suggestionsList"
import { statusesList } from "@/const/statusesList"

const ProductPreview = () => {
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

                        <span>🔍</span> <span>naru...</span>
                    </div>

                    <div className="border-2 border-black border-t-0">
                        {suggestionsList.map((suggestion, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-3.5 py-2.5 border-black/10  text-sm"
                            >
                                <div className="w-7.5 h-10.5 border-2 border-black" style={{ backgroundColor: suggestion.color }}></div>

                                <div>
                                    <p className="font-bold text-graphite text-start">{suggestion.name}</p>
                                    <p className="text-graphite text-xs text-start">{suggestion.meta}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 mt-5 flex-wrap">
                        {statusesList.map((status, index) => (
                            <div
                                key={index}
                                className={`text-xs font-bold border-2 border-black px-3.5 py-1.5 ${status.active ? "bg-red text-white" : "bg-background text-graphite"}`}
                            >
                                {status.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="font-mono text-xs text-graphite mt-4">preview real da interface do app</p>
        </section>
    )
}

export default ProductPreview
