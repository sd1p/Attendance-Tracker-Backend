/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Attendence` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Attendence" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Attendence_userId_key" ON "Attendence"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Class_id_key" ON "Class"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
