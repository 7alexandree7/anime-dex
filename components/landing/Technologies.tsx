import { technologyList } from "@/const/technologyList";

const Technologies = () => {
    return (
        <div className="flex gap-2.5 flex-wrap justify-center items-center">
            {technologyList.map((technology, index) => (
                <span key={index} className="text-sm font-mono text-graphite border-2 border-black px-3 py-1.5">{technology}</span>
            ))}
        </div>
    )
}

export default Technologies
