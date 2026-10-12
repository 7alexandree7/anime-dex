
import SeeAllAnimes from "@/components/dashboard/SeeAllAnimes";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SLUG_TO_STATUS, STATUS_LABELS } from "@/types/dashboard";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

interface SeAllAnimesProps {
    params: Promise<{ status: string }>
    searchParams: Promise<{ page?: string }>
}

const PAGE_SIZE: number = 10

const Page = async ({ params, searchParams }: SeAllAnimesProps) => {

    const { status } = await params;
    const { page } = await searchParams;
    const pageNumber = Number(page)
    const currentPage = Number.isInteger(pageNumber) && pageNumber > 0 ? pageNumber : 1;

    if (!Object.hasOwn(SLUG_TO_STATUS, status)) notFound();

    const animeStatus = SLUG_TO_STATUS[status];

    const session = await auth.api.getSession({ headers: await headers() })
    if (!session || !session?.user?.id) redirect('/login')
    const userId = session?.user?.id

    const [total, animes] = await Promise.all([
        prisma.userAnimeList.count({
            where: { userId, status: animeStatus },
        }),
        prisma.userAnimeList.findMany({
            where: { userId, status: animeStatus },
            orderBy: { updatedAt: "desc" },
            take: PAGE_SIZE,
            skip: (currentPage - 1) * PAGE_SIZE,
        }),
    ])

    const totalPages = Math.ceil(total / PAGE_SIZE);
    const label = STATUS_LABELS[animeStatus] ?? status;

    if( totalPages > 0 && currentPage > totalPages) redirect(`/dashboard/${status}?page=${totalPages}`)

    return (
        <SeeAllAnimes label={label} status={status} total={total} animes={animes} currentPage={currentPage} totalPages={totalPages}/>
    )
}

export default Page
