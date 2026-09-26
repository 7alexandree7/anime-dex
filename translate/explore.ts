export const exploreTitles = {
  topAnimes: { pt: "Top Animes", ja: "人気アニメ" },
  action: { pt: "Ação", ja: "アクション" },
  adventure: { pt: "Aventura", ja: "冒険" },
  fantasy: { pt: "Fantasia", ja: "ファンタジー" },
  romance: { pt: "Romance", ja: "恋愛" },
  drama: { pt: "Drama", ja: "ドラマ" },
  comedy: { pt: "Comédia", ja: "コメディ" },
  mystery: { pt: "Mistério", ja: "ミステリー" },
  sliceOfLife: { pt: "Slice of Life", ja: "日常系" },
  sports: { pt: "Esporte", ja: "スポーツ" },
  ecchi: { pt: "Ecchi", ja: "エッチ" },
  supernatural: { pt: "Sobrenatural", ja: "超自然" },
} as const;

export type ExploreTitleKey = keyof typeof exploreTitles;