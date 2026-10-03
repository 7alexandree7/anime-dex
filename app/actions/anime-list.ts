"use server";

import { AnimeStatus } from "@/lib/generated/prisma/enums";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";


interface AddToListInput {
    malId: number;
    status: AnimeStatus;
    title: string;
    imageUrl: string;
    totalEpisodes: number | null;
}


export async function addToList(input: AddToListInput) {

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session || !session?.user.id) throw new Error('Not authenticated');

    await prisma.userAnimeList.upsert({
        where: {
            userId_malId: {
                userId: session.user.id,
                malId: input.malId,
            },
        },
        update: {
            status: input.status,
        },
        create: {
            userId: session.user.id,
            malId: input.malId,
            status: input.status,
            title: input.title,
            imageUrl: input.imageUrl,
            totalEpisodes: input.totalEpisodes,
        },
    });

    revalidatePath(`/explore/${input.malId}`);
}