import { AnimeStatus } from "@/lib/generated/prisma/enums";
import { STATUS_LABELS } from "@/types/dashboard";

interface DashboardStatsProps {
    counts: Record<AnimeStatus, number>
}

const STATUSES: AnimeStatus[] = ["WATCHING", "COMPLETED", "PLAN_TO_WATCH", "DROPPED"];

const DashboardStats = ({ counts }: DashboardStatsProps) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols4 gap-3 mb-8">
            {STATUSES.map((status) => (
                <div key={status} className="border-3 border-black bg-white p-4 shadow-[4px_4px_0_0_#111]">
                    <p>{counts[status]}</p>
                    <p className="font-mono text-[10px] uppercase text-black/60 mt-1">
                        {STATUS_LABELS[status]}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default DashboardStats
