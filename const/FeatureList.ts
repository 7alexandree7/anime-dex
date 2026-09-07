interface Feature {
    id: string;
    title: string;
    description: string;
    size: string;
}


export const featureList: Feature[] = [
    {
        id: "N.° 001",
        title: "Busca em tempo real",
        description: "Digite o nome e encontre qualquer anime na hora, com dados sempre buscados frescos.",
        size: "big",
    },
    {
        id: "N.° 002",
        title: "Progresso por episódio",
        description: "Marque onde parou, sem perder o fio.",
        size: "",
    },
    {
        id: "N.° 003",
        title: "Dublado ou legendado",
        description: "Registre como assistiu cada título.",
        size: "",
    },
    {
        id: "N.° 004",
        title: "Organizado por status",
        description: "Assistindo, completo, quero assistir ou dropado — separado do seu jeito.",
        size: "wide",
    },
    {
        id: "N.° 005",
        title: "Favoritos",
        description: "Destaque os que mais importam.",
        size: "",
    },
]