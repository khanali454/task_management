import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('0'); // 0 for Pending, 1 for Completed

    // loading state
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    // for navigation 
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        // use axios for get request to fetch the task by id
        axios.get(`${import.meta.env.VITE_API_URL}/tasks/${id}`).then((response) => {
            if (response?.data?.status) {
                setTitle(response?.data?.data?.title);
                setDescription(response?.data?.data?.description);
                setStatus(response?.data?.data?.is_completed.toString());
            } else {
                alert(response?.data?.message);
            }
            setLoading(false);
        }).catch((error) => {
            console.error("There was an error fetching the task!", error);
            alert(error?.response?.data?.message || "An error occurred while fetching the task.");
            navigate('/');
            setLoading(false);
        });
    },[id])


    const updateTask = () => {
        // put request to update the task 
        axios.put(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
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
            alert(error?.response?.data?.message || "An error occurred while updating the task.");
        });
    }
    return (
        <div className="w-[50%] mx-auto py-4">
            {loading ? (
                <>
                    <div className="flex justify-center items-center">
                        <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.364A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.574zM12 20a8.003 8.003 0 01-6.364-2.93l-3.93 1.574A11.95 11.95 0 0012 24v-4zm6.364-2.93A8.003 8.003 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3.636-1.568zM20 12a8.003 8.003 0 01-2.93-6.364l3.636-1.568A11.95 11.95 0 0024 12h-4z"></path>
                        </svg>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Edit Task</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                            <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="mt-1 block w-full outline-none border px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Task Title" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                            <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className="mt-1 outline-none border px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Task Description"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                            <select onChange={(e) => { setStatus(e.target.value) }} className="mt-1 outline-none border px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                <option value="0" selected={status === '0'}>Pending</option>
                                <option value="1" selected={status === '1'}>Completed</option>
                            </select>
                        </div>
                        <button onClick={(e) => { e.preventDefault(); updateTask() }} type="submit" className="px-4 mt-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Changes</button>
                    </form>

                </>
            )}
        </div>
    )
}

export default EditTask