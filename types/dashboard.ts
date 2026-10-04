import { AnimeStatus } from "@/lib/generated/prisma/enums";

export interface DashboardListItem {
    malId: string;
    status: AnimeStatus;
    title: string;
    imageUrl: string;
    totalEpisodes: number | null;
    updatedAt: Date;
}


export const STATUS_LABELS: Record<AnimeStatus, string> = {
    WATCHING: "Assistindo",
    COMPLETED: "Completo",
    PLAN_TO_WATCH: "Quero Assistir",
    DROPPED: "Dropado",
}


export const STATUS_SLUGS: Record<AnimeStatus, string> = {
    WATCHING: "assistindo",
    COMPLETED: "completo",
    PLAN_TO_WATCH: "quero-assistir",
    DROPPED: "dropado",
}