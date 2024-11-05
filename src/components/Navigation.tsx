import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Tech Companies</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <i className="fas fa-home"></i> Dashboards
          </Link>
        </li>
        <li>
          <Link 
            to="/companies" 
            className={`nav-link ${isActive('/companies') ? 'active' : ''}`}
          >
            <i className="fas fa-building"></i> Companies
          </Link>
        </li>
        <li>
          <Link 
            to="/departments" 
            className={`nav-link ${isActive('/departments') ? 'active' : ''}`}
          >
            <i className="fas fa-sitemap"></i> Departments
          </Link>
        </li>
        <li>
          <Link 
            to="/specializations" 
            className={`nav-link ${isActive('/specializations') ? 'active' : ''}`}
          >
            <i className="fas fa-code-branch"></i> Specializations
          </Link>
        </li>
        <li>
          <Link 
            to="/colleagues" 
            className={`nav-link ${isActive('/colleagues') ? 'active' : ''}`}
          >
            <i className="fas fa-users"></i> Colleagues
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;