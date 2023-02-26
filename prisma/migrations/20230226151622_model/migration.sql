/*
  Warnings:

  - Added the required column `rank` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Score" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "money" INTEGER NOT NULL,
    "roundsPlayed" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL
);
INSERT INTO "new_Score" ("id", "money", "name", "roundsPlayed") SELECT "id", "money", "name", "roundsPlayed" FROM "Score";
DROP TABLE "Score";
ALTER TABLE "new_Score" RENAME TO "Score";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
