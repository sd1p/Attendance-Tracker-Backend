-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'FACULTY');

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "rollno" STRING,
    "email" STRING,
    "password" STRING NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" STRING NOT NULL,
    "subjectId" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "start" STRING NOT NULL,
    "duration" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" STRING NOT NULL,
    "sem" INT4 NOT NULL,
    "coursename" STRING NOT NULL,
    "courseId" STRING NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendence" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "classId" STRING NOT NULL,
    "subjectId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attendence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_rollno_key" ON "User"("rollno");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Class_id_key" ON "Class"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_id_key" ON "Subject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_courseId_key" ON "Subject"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Attendence_userId_classId_key" ON "Attendence"("userId", "classId");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendence" ADD CONSTRAINT "Attendence_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendence" ADD CONSTRAINT "Attendence_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendence" ADD CONSTRAINT "Attendence_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
