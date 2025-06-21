# 📝 Task Management App

A simple full-stack task management application built with **Express.js** (backend) and **React.js** (frontend). The app allows users to create, read, update, and delete (CRUD) tasks efficiently.

---

## 🚀 Features

* ✅ Add new tasks
* 📋 View a list of all tasks
* ✏️ Edit existing tasks
* ❌ Delete tasks
* 🔄 RESTful API implementation

---

## ⚙️ Prerequisites

Ensure the following are installed on your system:

* **Node.js**
* **npm** or **yarn** or **pnpm**
* **mysql** (mysql workbench or xampp/wampp server)

---

## 🛠️ Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/khanali454/task_management.git
cd task_management
```

2. **Install Server Dependencies**

```bash
cd server
npm install
```

3. **Install Client Dependencies**

```bash
cd client
npm install
```



## 📥 Database Setup - Importing `tasks_db.sql` into MySQL

### 🔹 Using phpMyAdmin

1. Visit `http://localhost/phpmyadmin`
2. Click on **Databases**
3. Create a new database named `tasks_db`
4. Select the `tasks_db` database
5. Go to the **Import** tab
6. Click **Choose File** and select `tasks_db.sql`
7. Click **Go**

### 🔹 Using MySQL Workbench

1. Open MySQL Workbench
2. Run:
   ```sql
   CREATE DATABASE tasks_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
````

3. Go to **File → Open SQL Script** and open `tasks_db.sql`
4. Set `tasks_db` as the default schema
5. Click the ⚡️ button to execute the script


4. **Setup Environment Variables**

In the `/server` directory, create a `.env` file or rename .env.example to .env:

```
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD=""
DB_NAME=""
```

> Add your database credentials.


In the `/client` directory, create a `.env` file or rename .env.example to .env:

```
VITE_API_URL="your_api_base_url"
```

> Replace with your api base url.

---

## 🧪 Running the App

1. **Start the Backend Server**

```bash
cd server
npm run dev
```

2. **Start the Frontend Development Server**

```bash
cd client
npm run dev
```

The app will be running at:
🔗 Frontend: `http://localhost:5173` || or at any available port
🔗 Backend: `http://localhost:3000`

---

## 🔧 Tech Stack

* **Frontend:** React.js (JSX, Hooks, Axios)
* **Backend:** Node.js, Express.js
* **Database:** mysql (relational database)
* **API:** RESTful Services

---
