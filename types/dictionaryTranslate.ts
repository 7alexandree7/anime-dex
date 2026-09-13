export interface HeaderDictionaryType {
  login: string;
  createAccount: string;
  myProfile: string;
  myList: string;
  settings: string;
  logout: string;
}

export interface HeroDictionaryType {
  title: string;
  span: string;
  description: string;
  startButton: string;
  githubButton: string;
}

export interface Suggestion {
    initial: string;
    exampleAnime: string;
    exampleAnime2: string;
    episodes2: string;
    episodes: string;
    color: string;
    text: string;
}

export interface StatusListHome {
    labelPt: string,
    labelJa: string,
    active: boolean,
}


// types/dictionaryTranslate.ts
export interface Feature {
  id: string;
  titlePt: string;
  titleJa: string;
  descriptionPt: string;
  descriptionJa: string;
  size: string;
}


export interface FeatureHero {
  titlePt: string;
  titleJa: string;
  descriptionPt: string;
  descriptionJa: string;
}