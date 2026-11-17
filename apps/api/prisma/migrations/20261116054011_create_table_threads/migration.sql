-- DropForeignKey
ALTER TABLE "Threads" DROP CONSTRAINT "Threads_productId_fkey";

-- DropForeignKey
ALTER TABLE "Threads" DROP CONSTRAINT "Threads_publicationId_fkey";

-- AlterTable
ALTER TABLE "Threads" ALTER COLUMN "productId" DROP NOT NULL,
ALTER COLUMN "publicationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publications"("id") ON DELETE SET NULL ON UPDATE CASCADE;
