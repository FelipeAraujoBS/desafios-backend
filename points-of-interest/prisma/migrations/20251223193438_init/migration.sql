-- CreateTable
CREATE TABLE "POIs" (
    "id" TEXT NOT NULL,
    "nomePoi" TEXT NOT NULL,
    "cordX" INTEGER NOT NULL,
    "cordY" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "POIs_pkey" PRIMARY KEY ("id")
);
