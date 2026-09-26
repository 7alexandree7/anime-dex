export interface AnimeCardData {
    malId: number
    title: {
        romaji: string
        english: string
    }
    imageUrl: string
    episodes: number | null
}