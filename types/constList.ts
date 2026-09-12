export interface Feature {
    id: string;
    title: string;
    description: string;
    size: string;
}

export interface StatusListHome {
    labelPt: string,
    labelJa: string,
    active: boolean,
}


export interface Suggestion {
    name: string,
    meta: string,
    color: string
}

export enum Technology {
  NextJs = "Next.js",
  Tailwind = "Tailwind",
  TypeScript = "TypeScript",
  PrismaNeon = "Prisma + Neon",
  BetterAuth = "Better Auth",
  JikanApi = "Jikan API",
}
