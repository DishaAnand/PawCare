import React from 'react';
import Navbar from '../components/navbar';
import Profile from '../components/molecules/userProfile/userProfile';
import AboutUs from '../components/molecules/aboutUs/aboutUs';
import ContactUs from '../components/molecules/contactUs/contactUs';
import Login from "../components/molecules/auth/Login";
import Register from "../components/molecules/auth/Register";
import Reset from "../components/molecules/auth/Reset";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
