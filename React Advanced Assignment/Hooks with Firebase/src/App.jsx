import React from 'react'
import CounterwithHooks from './CounterwithHooks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginwithFirebase from './LoginwithFirebase'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginwithFirebase />} />
        <Route path="/counter" element={<CounterwithHooks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
