-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Score" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "money" INTEGER NOT NULL,
    "roundsPlayed" INTEGER NOT NULL,
    "rank" INTEGER
);
INSERT INTO "new_Score" ("id", "money", "name", "rank", "roundsPlayed") SELECT "id", "money", "name", "rank", "roundsPlayed" FROM "Score";
DROP TABLE "Score";
ALTER TABLE "new_Score" RENAME TO "Score";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
