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
import Profile from './pages/Mypage/Profile';
import PostProduct from './pages/Market/PostProduct';
import MarketBuy from './pages/Market/MarketBuy';
import Chatting from './pages/Chatting/Chatting';
import FavoriteList from './pages/Mypage/FavoriteList';
import SellList from './pages/Mypage/SellList';
import BuyList from './pages/Mypage/BuyList';
import Review from './pages/Mypage/Review';
import BoardMain from './pages/Board/BoardMain'; 
import Article from "./pages/Board/Article";
import Post from "./pages/Board/Post";
import Report from "./pages/Board/Report";




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
          <Route path="/mypage/profile" element={<Profile />} />
          <Route path="/market/post" element={<PostProduct />} />
          <Route path="/market/:id/buy" element={<MarketBuy />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/mypage/favorite" element={<FavoriteList />} />
          <Route path="/mypage/sell" element={<SellList />} />
          <Route path="/mypage/buy" element={<BuyList />} />
          <Route path="/mypage/buy/review/:id" element={<Review />} />
          <Route path="/board" element={<BoardMain />} /> 
          <Route path="/article/:id" element={<Article />} />
          <Route path="/post" element={<Post />} />  
          <Route path="/report" element={<Report />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
