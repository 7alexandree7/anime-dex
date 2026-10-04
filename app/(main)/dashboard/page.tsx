import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { STATUS_LABELS } from "@/types/dashboard";
import { AnimeStatus } from "@/lib/generated/prisma/enums";
import DashboardStats from "@/components/dashboard/DashboardStats";
import StatusChart from "@/components/dashboard/StatusChart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import CategoryRow from "@/components/dashboard/CategoryRow";


const DashboardPage = async () => {

  const STATUSES: AnimeStatus[] = ["WATCHING", "COMPLETED", "PLAN_TO_WATCH", "DROPPED"];

  const session = await auth.api.getSession({ headers: await headers() })
  if (!session || !session?.user.id) redirect('/login')

  const userId = session?.user?.id

  const [counts, recentActivity, categoryData] = await Promise.all([
    prisma.userAnimeList.groupBy({
      by: ["status"],
      where: { userId },
      _count: true,
    }),
    prisma.userAnimeList.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      take: 5,
    }),
    Promise.all(
      STATUSES.map((status) =>
        prisma.userAnimeList.findMany({
          where: { userId, status },
          orderBy: { updatedAt: "desc" },
          take: 10,
        })
      )
    )
  ])


  const countMap = Object.fromEntries(
    STATUSES.map((status) => [
      status,
      counts.find((c) => c.status === status)?._count ?? 0
    ])
  ) as Record<AnimeStatus, number>

  return (
    <main className="mx-auto max-w-6xl px-6 pt-8 pb-20">
      <h1 className="font-heading text-2xl md:text-3xl mb-1">Minha Dashboard</h1>
      <p className="font-mono text-xs text-black/60 mb-6"> Painel de controle da sua jornada otaku</p>
      <DashboardStats counts={countMap} />

      <div className="grid md:grid-cols-5 gap-4 mb-10">
        <StatusChart counts={countMap} />
        <ActivityFeed items={recentActivity} />
      </div>

      {STATUSES.map((status, index) => (
        <CategoryRow
          key={status}
          status={status}
          label={STATUS_LABELS[status]}
          total={countMap[status]}
          items={categoryData[index]}
        />
      ))}

    </main>
  )
}

export default DashboardPage
