import { useState } from 'react'
import Footer from './modules/footer'
import Header from './modules/header'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Main from './pages/Auth/Main';
import Register from './pages/Auth/Register';
import MarketMain from './pages/Market/MarketMain';
import MarketDetail from './pages/Market/MarketDetail';
import MyPage from './pages/Mypage/MyPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/market" element={<MarketMain />} />
          <Route path="/market/:id" element={<MarketDetail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
