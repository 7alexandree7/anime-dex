import { AnimeStatus } from "@/lib/generated/prisma/enums";
import { STATUS_LABELS } from "@/types/dashboard";


interface StatusChartProps {
    counts: Record<AnimeStatus, number>;
}

const STATUSES: AnimeStatus[] = ["WATCHING", "COMPLETED", "PLAN_TO_WATCH", "DROPPED"];

const StatusChart = ({ counts }: StatusChartProps) => {
    const max = Math.max(...STATUSES.map((s) => counts[s]), 1)

    return (
        <div className="md:col-span-3 border-3 border-black bg-white p-5">
            <p className="font-mono text-[10px] uppercase text-black/60 mb-4">■ Distribuição por status</p>
            <div className="space-y-3">
                {STATUSES.map((status) => (
                    <div key={status} className="flex items-center gap-3">
                        <span className="w-28 font-mono text-[10px] uppercase shrink-0">
                            {STATUS_LABELS[status]}
                        </span>
                        <div className="h-5 flex-1 border border-black bg-background">
                            <div
                                className={status === "COMPLETED" ? "h-full bg-[#E8352C]" : "h-full bg-black"}
                                style={{ width: `${(counts[status] / max) * 100}%` }}
                            />
                        </div>
                        <span className="font-mono text-[10px] w-6 text-right">{counts[status]}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatusChart
