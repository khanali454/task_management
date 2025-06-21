import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AddTask from './pages/AddTask.jsx'
import EditTask from './pages/EditTask.jsx'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tasks/create" element={<AddTask/>}/>
                <Route path="/tasks/edit/:id" element={<EditTask/>}/>
            </Routes>
        </Router>
    )
}

export default App