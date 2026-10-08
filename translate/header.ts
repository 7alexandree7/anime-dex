import { LanguageCode } from "../types/language";
import { HeaderDictionaryType } from "@/types/dictionaryTranslate";

export const headerDictionary: Record<LanguageCode, HeaderDictionaryType> = {
  pt: {
    login: "Entrar",
    createAccount: "Criar Conta",
    myProfile: "Meu Perfil",
    dashboard: "Dashboard",
    settings: "Configurações",
    logout: "Sair",
  },
  ja: {
    login: "ログイン",
    createAccount: "アカウント作成",
    myProfile: "マイプロフィール",
    dashboard: "ダッシュボード",
    settings: "設定",
    logout: "ログアウト",
  },
};
