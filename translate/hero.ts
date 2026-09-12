import { HeroDictionaryType } from "@/types/dictionaryTranslate";
import { LanguageCode } from "@/types/language";


export const heroDictionary: Record<LanguageCode, HeroDictionaryType> = {
    pt: {
        title: "Sua lista de anime",
        span: "catalogada.",
        description: "Busque qualquer anime, acompanhe seu progresso episódio por episódio e organize tudo por status — sem depender de planilha.",
        startButton: "Começar agora",
        githubButton: "Ver no Github",
    },
    ja: {
        title: "あなたのアニメリスト",
        span: "分類済み。",
        description: "スプレッドシートに頼ることなく、あらゆるアニメを検索し、エピソードごとの進捗を記録し、ステータスごとに整理・管理できます。",
        startButton: "今すぐ始める",
        githubButton: "Githubで見る",
    }
}