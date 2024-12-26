import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">View Blog</Link>
      <Link to="/create">Create Blog</Link>
    </nav>
  );
}

export default Navbar;