import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Home() {

    // fetch all tasks
    const [tasks, setTasks] = useState([]);

    const fetchTasks = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/tasks`).then((response) => {
            if (response?.data?.status) {
                setTasks(response?.data?.data);
            }
        })
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    // delete a task
    const deleteTask = (id) => async () => {
        if (confirm("Are you sure?")) {
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
            if (response?.data?.status) {
                fetchTasks();
                alert(response?.data?.message);
            }
        }
    }

    return (
        <div className="relative overflow-x-auto w-[90%] mx-auto py-4">

            {/* heading & add new button */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Tasks</h1>
                <Link to='/tasks/create' className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Add New Task
                </Link>
            </div>

            {/* tasks table */}
            <div className="w-full overflow-x-auto border border-gray-200">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">
                                Title
                            </th>
                            <th className="px-6 py-3">
                                Description
                            </th>
                            <th className="px-6 py-3">
                                Status
                            </th>
                            <th className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* when there is no task */}

                        {tasks.length == 0 && (

                            <tr className="bg-white border-b border-gray-200">
                                <td className="px-6 py-4 text-center" colSpan={4}>
                                    We are sorry, no task was found
                                </td>
                            </tr>

                        )}

                        {/* when there is any task */}
                        {tasks.length > 0 && (
                            <>

                                {tasks.map((task) => (
                                    <tr className="bg-white border-b border-gray-200">
                                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {task?.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {task?.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {task?.is_completed ? "Completed" : "Pending"}
                                        </td>
                                        <td className="px-6 py-4 flex items-center gap-2">
                                            <Link to={`/tasks/edit/${task?.id}`} className='px-3 cursor-pointer py-1 text-sm bg-blue-500 text-white rounded-sm'>
                                                edit
                                            </Link>
                                            <button onClick={deleteTask(task?.id)} className='px-3 py-1 cursor-pointer text-sm bg-red-500 text-white rounded-sm'>
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home