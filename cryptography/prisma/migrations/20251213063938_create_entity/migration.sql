-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "userDocument" TEXT NOT NULL,
    "creditCardToken" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entity_userDocument_key" ON "Entity"("userDocument");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_creditCardToken_key" ON "Entity"("creditCardToken");
