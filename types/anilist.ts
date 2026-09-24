export interface AnilistMedia {
    id: number;
    idMal: number | null;
    title: {
        romaji: string,
        english: string | null
    }
    episodes: number | null
    coverImage: {
        large: string
    }
}

export interface AnilistPageResponse {
    data: {
        Page: {
            media: AnilistMedia[]
        }
    }
}