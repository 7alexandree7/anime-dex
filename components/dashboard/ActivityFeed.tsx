import { formatRelativeTime } from "@/app/utils/formatRelativeTime";
import { STATUS_LABELS, DashboardListItem } from "@/types/dashboard";

interface ActivityFeedProps {
  items: DashboardListItem[];
}

const ActivityFeed = ({ items }: ActivityFeedProps) => {
  return (
    <div className="md:col-span-2 border-3 border-black bg-[#111] p-5">
      <p className="font-mono text-[10px] uppercase text-white/50 mb-3">▓ Atividade recente</p>
      <div className="font-mono text-[10.5px] leading-relaxed space-y-1.5 text-[#9ae69a]">
        {items.length === 0 && <p>Nenhuma atividade recente</p>}
        {items.map((item) => (
          <div className="flex flex-row gap-2 items-center" key={item.malId}>
            <p >
              &gt; {item.title}{" "}
              <span className="text-white/40">→</span> {STATUS_LABELS[item.status]}

            </p>
            <p className="text-white/30">{formatRelativeTime(item.updatedAt)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
