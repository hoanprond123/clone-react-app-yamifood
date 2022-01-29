import React,{ useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Menu from './pages/Menu'
import Stuff from './pages/Stuff'
import Reservation from './pages/Reservation'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogSingle from './pages/BlogSingle'
import Navbar from './components/Navbar'
import data from './components/dataBlog'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword';
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/stuff" element={<Stuff />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
    
  );
}

export default App;
