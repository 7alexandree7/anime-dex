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


export interface AnilistMediaDetail {
  id: number;
  idMal: number;
  title: {
    romaji: string;
    english: string | null;
  };
  description: string | null;
  bannerImage: string | null;
  coverImage: {
    extraLarge: string;
    color: string | null;
  };
  genres: string[];
  averageScore: number | null;
  popularity: number;
  favourites: number;
  episodes: number | null;
  duration: number | null;
  status: string;
  format: string;
  season: string | null;
  seasonYear: number | null;
  studios: {
    nodes: { name: string }[];
  };
  trailer: {
    id: string;
    site: string;
  } | null;
}

export interface AnilistMediaResponse {
  data: {
    Media: AnilistMediaDetail | null;
  };
}