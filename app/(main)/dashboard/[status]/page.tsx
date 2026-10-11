
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

const Page = async ({ params, searchParams }: SeAllAnimesProps) => {

    const { status } = await params;
    const { page } = await searchParams;
    const pageNumber = Number(page)
    const currentPage = pageNumber > 0 ? pageNumber : 1;
    console.log(currentPage);
    
    if (!Object.hasOwn(SLUG_TO_STATUS, status)) notFound();

    const animeStatus = SLUG_TO_STATUS[status];

    const session = await auth.api.getSession({ headers: await headers() })
    if (!session || !session?.user?.id) redirect('/login')
    const userId = session?.user?.id

    const animes = await prisma.userAnimeList.findMany({
        where: { userId, status: animeStatus },
        orderBy: { updatedAt: "desc" },
    });

    const label = STATUS_LABELS[animeStatus] ?? status;
    const total = animes.length ?? 0;



    return (
        <SeeAllAnimes label={label} total={total} animes={animes} />
    )
}

export default Page
