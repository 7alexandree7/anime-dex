import { Suggestion } from "@/types/dictionaryTranslate";
import { LanguageCode } from "@/types/language";

export const suggestionsTranslate: Record<LanguageCode, Suggestion[]> = {
    pt: [
        {
            initial: "Naru...",
            exampleAnime: "Naruto ",
            episodes: "220 episódios",
            exampleAnime2: "Naruto Shippuden",
            episodes2: "500 episódios",
            color: "#E8352C",
            text: "preview real da interface do app"

        },
    ],
    ja: [
        {
            initial: "なる...",
            exampleAnime: "ナルト",
            episodes: "220話",
            exampleAnime2: "ナルト疾風伝",
            episodes2: "500話",
            color: "#000",
            text: "実際のdaインターフェースをプレビューしてアプリを実行します"

        },
    ]
}