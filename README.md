# 🎌 PulseAnime

Aplicativo pessoal para acompanhar animes assistidos, em andamento e na lista de interesse — com dados sempre atualizados via API e notícias relacionadas.

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js (App Router) |
| Estilização | Tailwind CSS + shadcn/ui |
| Animações | Framer Motion |
| Autenticação | Better Auth |
| Banco de dados | Neon (PostgreSQL) + Prisma ORM |
| Dados de anime | [Jikan API v4](https://docs.api.jikan.moe/) (sem necessidade de chave) |

---

## 🗺️ Roadmap

### Fase 1 — Interface visual (sem lógica de backend)
- [✅] Header
- [✅] Landing Page
- [ ] Implementar Tradução para jp
- [ ] Tela de Login (visual)
- [ ] Tela de Registro (visual)

### Fase 2 — Autenticação
- [ ] Configurar Better Auth no projeto (CLI + schema Prisma de auth)
- [ ] Configurar banco Neon e rodar primeira migration
- [ ] Ligar tela de Registro ao Better Auth
- [ ] Ligar tela de Login ao Better Auth
- [ ] Proteger rotas internas (usuário não autenticado não acessa)

### Fase 3 — Modelagem de dados
- [ ] Criar model `UserAnimeList` no schema Prisma
  - `malId`, `status`, `rating`, `episodesWatched`, `isFavorite`, `startDate`, `completionDate`, `audioType`
  - Constraint `@@unique([userId, malId])`
- [ ] Rodar migration da tabela `UserAnimeList`

### Fase 4 — Home logada
- [ ] Rota protegida da Home
- [ ] Exibir 10 animes sugeridos (endpoint de top animes da Jikan) — cada card leva à página de detalhe
- [ ] Input de busca com autocomplete (Jikan `/anime?q=`) com debounce

### Fase 5 — Página de detalhe do anime
- [ ] Rota dinâmica `app/anime/[malId]/page.tsx`
- [ ] Buscar dados completos na Jikan (`/anime/{id}/full`)
- [ ] Exibir banner, título, sinopse, episódios
- [ ] Botão "Adicionar à minha lista" → abre modal

### Fase 6 — Modal de cadastro/edição
- [ ] Formulário: status, nota, episódios assistidos, favorito, datas, dublado/legendado
- [ ] API Route `POST /api/anime-list` (recebe `malId` + dados do form)
- [ ] API Route `PATCH /api/anime-list/[id]` (edição de registro existente)

### Fase 7 — Notícias
- [ ] Pesquisar fonte de notícias de anime (API/RSS)
- [ ] Exibir seção de notícias na página de detalhe do anime

### Fase 8 — Dashboard / Minha Lista
- [ ] Rota `app/dashboard`
- [ ] Buscar registros de `UserAnimeList` do usuário logado
- [ ] Buscar dados complementares na Jikan pra cada `malId`
- [ ] Organizar exibição em seções por `status`
- [ ] Cards levam de volta à página de detalhe

### Fase 9 — Polimento
- [ ] Animações de transição (Framer Motion)
- [ ] Tratamento de loading/erro (rate limit da Jikan, etc)
- [ ] Revisão de responsividade


---

## 🔌 API externa — Jikan

- Exemplo de chamada:
- GET https://api.jikan.moe/v4/anime?q=naruto&limit=1


<details>
<summary>📦 JSON Response</summary>

```json
{
  "data": [
    {
      "mal_id": 20,
      "title": "Naruto",
      "title_english": "Naruto",
      "title_japanese": "ナルト",
      "type": "TV",
      "episodes": 220,
      "status": "Finished Airing",
      "score": 7.99,
      "genres": [
        {
          "mal_id": 1,
          "name": "Action"
        },
        {
          "mal_id": 2,
          "name": "Adventure"
        }
      ]
    }
  ],
  "pagination": {
    "last_visible_page": 50,
    "has_next_page": true
  }
}
```

<details>
<summary>🗃️ UserAnimeList — Prisma Model</summary>

```prisma
model UserAnimeList {
  id              String    @id @default(cuid())
  userId          String
  malId            Int

  status          String    // "watching" | "completed" | "planToWatch" | "dropped"
  rating          Int?
  episodesWatched Int       @default(0)
  isFavorite      Boolean   @default(false)

  startDate       DateTime?
  completionDate  DateTime?
  audioType       String?   // "dubbed" | "subbed"

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  user User @relation(fields: [userId], references: [id])

  @@unique([userId, malId])
}