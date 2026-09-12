import { LanguageCode } from "../types/language";
import { HeaderDictionaryType } from "@/types/dictionaryTranslate";

export const headerDictionary: Record<LanguageCode, HeaderDictionaryType> = {
  pt: {
    login: "Entrar",
    createAccount: "Criar Conta",
    myProfile: "Meu Perfil",
    myList: "Minha Lista",
    settings: "Configurações",
    logout: "Sair",
  },
  ja: {
    login: "ログイン",
    createAccount: "アカウント作成",
    myProfile: "マイプロフィール",
    myList: "マイリスト",
    settings: "設定",
    logout: "ログアウト",
  },
};
