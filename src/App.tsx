import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import FindJobs from './pages/FindJobs'
import UnderConstruction from './pages/UnderConstruction'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<FindJobs />} />
            <Route path="/top-companies" element={<UnderConstruction />} />
            <Route path="/job-tracker" element={<UnderConstruction />} />
            <Route path="/calendar" element={<UnderConstruction />} />
            <Route path="/documents" element={<UnderConstruction />} />
            <Route path="/messages" element={<UnderConstruction />} />
            <Route path="/notifications" element={<UnderConstruction />} />
            <Route path="/resume-builder" element={<UnderConstruction />} />
            <Route path="/profile" element={<UnderConstruction />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <ToastContainer position="top-right" autoClose={2200} newestOnTop theme="light" closeOnClick pauseOnFocusLoss={false} draggable pauseOnHover={false} />
      </div>
    </BrowserRouter>
  )
}

export default App