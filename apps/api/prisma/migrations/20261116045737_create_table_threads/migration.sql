-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('PRODUCT', 'PUBLICATION');

-- CreateTable
CREATE TABLE "Threads" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "includeContentType" "ContentType"[] DEFAULT ARRAY[]::"ContentType"[],
    "productId" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,

    CONSTRAINT "Threads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
