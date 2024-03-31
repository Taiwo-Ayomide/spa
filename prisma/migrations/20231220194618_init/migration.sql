-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "surname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "churchName" TEXT NOT NULL,
    "pastorName" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
