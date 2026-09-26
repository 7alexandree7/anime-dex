export interface AnimeCardData {
    mailId: number
    title: {
        romaji: string
        english: string
    }
    imageUrl: string
    episodes: number | null
}