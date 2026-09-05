import type { Metadata } from "next";
import { Archivo_Black, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const archivoBlack = Archivo_Black({
  variable: "--font-heading",
  weight: "400", // Archivo Black só tem esse peso disponível
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Anime Dex",
  description: "Acompanhe seus animes favoritos",
  creator: "Alexandre",
  keywords: ["anime", "tracker de anime", "lista de anime", "myanimelist"],
  authors: [
    {
      name: "Alexandre",
      url: "https://github.com/7alexandree7",
    },
  ],
  openGraph: {
    title: "Anime Dex",
    description: "Sua lista de anime, catalogada.",
    type: "website",
    locale: "pt_BR",
  }
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivoBlack.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased}`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}

      </body>
    </html>
  );
}
