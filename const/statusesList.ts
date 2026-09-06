interface StatusListHome {
    label: string,
    active: boolean
}

export const statusesList: StatusListHome[] = [
    {label: "Assistindo", active: true},
    {label: "Completo", active: false},
    {label: "Quero Assistir", active: false},
    {label: "Dropado", active: false}
]