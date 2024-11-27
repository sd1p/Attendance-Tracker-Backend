# Attendance Tracker Backend

## Introduction  

Attendance Tracker Backend is a robust API that facilitates the management of attendance for students and faculty. This project includes endpoints for authentication, attendance tracking, and managing class schedules. The backend is designed to be secure and scalable, utilizing token-based authentication and modular architecture.

This backend was developed as part of my 5th-semester minor project for the DBMS subject (CS3001) at IIITR. The project also included a Flutter-based mobile application where faculty members could scan a student's ID card QR code to mark attendance seamlessly.

---

## Features  

- **Authentication:** Separate authentication flows for students and faculty.  
- **Attendance Management:** Add and retrieve attendance records for classes.  
- **Class Scheduling:** Faculty can create and manage class schedules.  
- **User Management:** Retrieve user details and roles.  

---

## Requirements  

- **Node.js:** v14 or higher  
- **Database:** PostgreSQL or any SQL-compliant database  
- **Dependencies:**  
  - `express`
  - `jsonwebtoken`
  - `bcrypt`
  - `sequelize`
  - `pg`

---

## Installation  

### 1. Clone the Repository  

```bash
git clone https://github.com/sd1p/Attendance-Tracker-Backend.git
cd Attendance-Tracker-Backend
```

### 2. Install Dependencies  

```bash
npm install
```

### 3. Set Up Environment Variables  

Create a `.env` file in the project root with the following keys:  

```env
PORT=4000
DATABASE_URL=your_database_url
JWT_SECRET=secret_key
```

### 4. Migrate the Database  

Run migrations to set up the database schema.  

```bash
npx prisma migrate dev
```

### 5. Start the Server  

```bash
npm start
```

The server will start at `http://localhost:4000`.

---

## API Endpoints  

### Authentication  

#### Student Authentication  

- **Register**  
  `POST /api/register`  
  Registers a new student.  

  **Request Body:**  

  ```json
  {
    "name": "John Doe",
    "rollno": "12345",
    "email": "john.doe@example.com",
    "role": "STUDENT",
    "password": "securepassword123"
  }
  ```  

  **Response:**  
  Returns a token and user details.

- **Login**  
  `POST /api/login`  
  Logs in a student.  

  **Request Body:**  

  ```json
  {
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }
  ```  

  **Response:**  
  Returns a token and user details.

- **Get Student Details**  
  `GET /api/user`  
  Retrieves the logged-in student details.  

  **Authorization:**  
  Bearer Token (student-auth-token)

---

#### Faculty Authentication  

- **Register**  
  `POST /api/register`  
  Registers a new faculty member.  

  **Request Body:**  

  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "role": "FACULTY",
    "password": "securepassword123"
  }
  ```  

  **Response:**  
  Returns a token and user details.

- **Login**  
  `POST /api/login`  
  Logs in a faculty member.  

  **Request Body:**  

  ```json
  {
    "email": "jane.doe@example.com",
    "password": "securepassword123"
  }
  ```  

  **Response:**  
  Returns a token and user details.

- **Get Faculty Details**  
  `GET /api/user`  
  Retrieves the logged-in faculty details.  

  **Authorization:**  
  Bearer Token (faculty-auth-token)

---

### Faculty-Only Routes  

- **Get Classes**  
  `GET /api/class`  
  Retrieves all classes created by the faculty.  

  **Authorization:**  
  Bearer Token (faculty-auth-token)

- **Create Class**  
  `POST /api/class`  
  Creates a new class.  

  **Request Body:**  

  ```json
  {
    "courseId": "CS3005", // courseId can be CS3001, CS3003 and CS3005.
    "userId": "123456",
    "start": "2023-10-15T10:00:00Z",
    "duration": "2h"
  }
  ```  

  **Response:**  
  Returns the details of the created class.

- **Get Class Attendance**  
  `POST /api/class-attendance`  
  Retrieves attendance for a specific class.  

  **Request Body:**  

  ```json
  {
    "classId": "c7ddb08e-be94-4694-bbb8-abbc418b2d46"
  }
  ```  

  **Response:**  
  List of students who attended the class.

- **Add Attendance**  
  `POST /api/attendance`  
  Marks attendance for a student.  

  **Request Body:**  

  ```json
  {
    "rollno": "12345",
    "classId": "c7ddb08e-be94-4694-bbb8-abbc418b2d46"
  }
  ```  

  **Response:**  
  Confirmation message with attendance details.

---

### Student-Only Routes  

- **Get Attendance**  
  `GET /api/attendance`  
  Retrieves attendance records for a specific course.  

  **Request Body:**  

  ```json
  {
    "courseId": "CS3005"
  }
  ```  

  **Response:**  
  List of classes and attendance records.

---
