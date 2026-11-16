/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `Publications` table. All the data in the column will be lost.
  - Added the required column `image` to the `Publications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageKey` to the `Publications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Publications" DROP COLUMN "thumbnail",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "imageKey" TEXT NOT NULL;
