/*
  Warnings:

  - You are about to drop the column `localization` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `Profile` table. All the data in the column will be lost.
  - Made the column `description` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Profile_email_key";

-- DropIndex
DROP INDEX "Profile_nickname_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "localization",
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "bio";
