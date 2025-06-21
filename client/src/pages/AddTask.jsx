import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('0'); // 0 for Pending, 1 for Completed

    // for navigation 
    const navigate = useNavigate();


    const createNew = () => {


        // use axios for post request to create taks 
        axios.post(`${import.meta.env.VITE_API_URL}/tasks`, {
            title: title,
            description: description,
            is_completed: status
        }).then((response) => {
            if (response?.data?.status) {
                alert(response?.data?.message);
                navigate('/');
            } else {
                alert(response?.data?.message);
            }
        }).catch((error) => {
            console.error("There was an error creating the task!", error);
            alert(error?.response?.data?.message || "An error occurred while creating the task.");
        });
    }
    return (
        <div className="w-[50%] mx-auto py-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add New Task</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="mt-1 block w-full outline-none border px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Task Title" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <textarea onChange={(e) => { setDescription(e.target.value) }} className="mt-1 outline-none border px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Task Description"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                    <select onChange={(e) => { setStatus(e.target.value) }} className="mt-1 outline-none border px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option value="0">Pending</option>
                        <option value="1">Completed</option>
                    </select>
                </div>
                <button onClick={(e) => { e.preventDefault(); createNew() }} type="submit" className="px-4 mt-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask