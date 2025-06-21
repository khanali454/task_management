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
git clone https://github.com/khanali454/assessment.git
cd assessment
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

4. **Setup Environment Variables**

In the `/server` directory, create a `.env` file or rename .env.example to .env:

```
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD=""
DB_NAME=""
```

> Add your database credentials.

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
