import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from "./HomePage/NotFound";
import { KeepReadingSection } from './HomePage/KeepReadingSection'; // Assuming KeepReadingSection is exported as a named export

// Add a type annotation for the import statement
import type { KeepReadingSectionProps } from './HomePage/KeepReadingSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/home" element={<Home />} />
        <Route path="/keep-reading" element={<KeepReadingSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App;
