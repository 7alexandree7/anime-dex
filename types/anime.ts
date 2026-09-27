export interface AnimeCardData {
    malId: number
    title: {
        romaji: string
        english: string
    }
    imageUrl: string
    episodes: number | null
}

export interface AnimeDetailData {
  malId: number;
  title: {
    english: string | null;
    romaji: string;
  };
  description: string | null;
  bannerImage: string | null;
  coverImage: string;
  coverColor: string | null;
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
  studio: string | null;
  trailerUrl: string | null;
}