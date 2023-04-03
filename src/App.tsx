import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import Navbar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ReadingPage from './pages/ReadingPage';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Routes>
      {/* <Navbar /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/reading" element={<ReadingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/profile/edit/:id" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
