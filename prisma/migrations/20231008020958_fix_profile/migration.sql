/*
  Warnings:

  - You are about to drop the `_PostToProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostToProfile" DROP CONSTRAINT "_PostToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToProfile" DROP CONSTRAINT "_PostToProfile_B_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "profileId" TEXT;

-- DropTable
DROP TABLE "_PostToProfile";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
