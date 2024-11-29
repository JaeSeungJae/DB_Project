import { useState } from 'react'
import Footer from './modules/footer'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
