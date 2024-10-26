import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Add this for styling (we'll create it next)

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>Tech Companies</h2>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/specializations">Specializations</Link></li>
        <li><Link to="/colleagues">Colleagues</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
