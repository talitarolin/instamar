/*
  Warnings:

  - You are about to drop the column `highlightId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_highlightId_fkey";

-- DropIndex
DROP INDEX "Post_highlightId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "highlightId";

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
