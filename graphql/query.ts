export const ANILIST_QUERY = `
  query ($genre: String) {
    Page(page: 1, perPage: 12) {
      media(genre: $genre, type: ANIME, sort: POPULARITY_DESC) {
        id
        idMal
        title {
          romaji
          english
        }
        episodes
        coverImage {
          large
        }
      }
    }
  }
`;

export const TOP_ANIMES_QUERY = `
query {
  Page(page: 1, perPage: 12) {
    media(type: ANIME, sort: POPULARITY_DESC) {
      id
      idMal
      title { romaji english }
      episodes
      coverImage { large }
    }
  }
}
`

export const ANIME_DETAIL_QUERY = `
  query ($malId: Int) {
    Media(idMal: $malId, type: ANIME) {
      id
      idMal
      title {
        romaji
        english
      }
      description(asHtml: false)
      bannerImage
      coverImage {
        extraLarge
        color
      }
      genres
      averageScore
      popularity
      favourites
      episodes
      duration
      status
      format
      season
      seasonYear
      studios(isMain: true) {
        nodes {
          name
        }
      }
      trailer {
        id
        site
      }
    }
  }
`;


export const SEARCH_QUERY = `
query ($search: String) {
    Page(page: 1, perPage: 8) {
        media(search: $search, type: ANIME) {
            idMal
            title { romaji english }
            coverImage { large }
            episodes
        }
    }
}
`;