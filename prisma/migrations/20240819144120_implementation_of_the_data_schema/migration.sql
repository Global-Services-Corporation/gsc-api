-- CreateEnum
CREATE TYPE "Benefits" AS ENUM ('MedicalConsultations', 'Exams', 'Hospitalization');

-- CreateEnum
CREATE TYPE "Hospital" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "Doctor" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "Treatment" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "Insurance" AS ENUM ('Monthly', 'Quarterly', 'Annually');

-- CreateEnum
CREATE TYPE "NetworkOfSpecialistHospitals" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('Yes', 'No');

-- CreateTable
CREATE TABLE "Inquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nif" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "coberturaMedica" TEXT NOT NULL,
    "benefits" "Benefits" NOT NULL,
    "hospital" "Hospital" NOT NULL,
    "insurance" "Insurance" NOT NULL,
    "doctor" "Doctor" NOT NULL,
    "condition" "Condition" NOT NULL,
    "treatment" "Treatment" NOT NULL,
    "networkOf" "NetworkOfSpecialistHospitals" NOT NULL,

    CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Academy" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bornDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Academy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Inquiry_email_key" ON "Inquiry"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Support_email_key" ON "Support"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Academy_email_key" ON "Academy"("email");
