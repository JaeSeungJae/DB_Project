import { useState } from 'react'
import Footer from './modules/footer'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
