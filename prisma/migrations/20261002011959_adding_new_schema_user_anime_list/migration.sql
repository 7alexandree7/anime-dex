-- CreateEnum
CREATE TYPE "AnimeStatus" AS ENUM ('WATCHING', 'COMPLETED', 'PLAN_TO_WATCH', 'DROPPED');

-- CreateTable
CREATE TABLE "UserAnimeList" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "malId" INTEGER NOT NULL,
    "status" "AnimeStatus" NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "totalEpisodes" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAnimeList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAnimeList_userId_malId_key" ON "UserAnimeList"("userId", "malId");

-- AddForeignKey
ALTER TABLE "UserAnimeList" ADD CONSTRAINT "UserAnimeList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
