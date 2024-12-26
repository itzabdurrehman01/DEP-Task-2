import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BlogDetail from './components/BlogDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<BlogForm />} />
        <Route path="/edit/:id" element={<BlogForm />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
      <footer>© 2024 My Blog. All rights reserved.</footer>
    </Router>
  );
}

export default App;