import { useState } from 'react'
import Footer from './modules/footer'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
