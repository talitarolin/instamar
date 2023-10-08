/*
  Warnings:

  - You are about to drop the column `profileId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_profileId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "profileId";

-- CreateTable
CREATE TABLE "_PostToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToProfile_AB_unique" ON "_PostToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToProfile_B_index" ON "_PostToProfile"("B");

-- AddForeignKey
ALTER TABLE "_PostToProfile" ADD CONSTRAINT "_PostToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToProfile" ADD CONSTRAINT "_PostToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
