import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config()
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// for fetching all tasks from the db
export async function getTasks() {
    const [rows] = await connection.query('SELECT * FROM tasks ORDER BY id DESC');
    return {
        status: true,
        message: "Tasks fetched successfully",
        data: rows
    };
}


// for getting a single task by its id
export async function getTaskById(id) {
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?', [id]);
    return rows[0];
}

// for creating a new task
export async function createTask(title, description, is_completed) {
    const [result] = await connection.query(
        'INSERT INTO tasks (title, description, is_completed) VALUES (?, ?, ?)',
        [title, description, is_completed]
    );
    const createdTask = await getTaskById(result.insertId)
    return {
        status: true,
        message: "Task created successfully",
        data: createdTask
    };
}


// for deleting a task by id
export async function deleteTask(id) {
    const [result] = await connection.query('DELETE FROM tasks WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        return {
            status: false,
            message: "Task not found"
        };
    }
    return {
        status: true,
        message: "Task deleted successfully"
    };
}

// for updating a task
export async function updateTask(id, { title, description, is_completed }) {
    const [result] = await connection.query(
        'UPDATE tasks SET title = ?, description = ?, is_completed = ? WHERE id = ?',
        [title, description, is_completed, id]
    );
    if (result.affectedRows === 0) {
        return {
            status: false,
            message: "Task not found"
        };
    }
    const updatedTask = await getTaskById(id);
    return {
        status: true,
        message: "Task updated successfully",
        data: updatedTask
    };
}