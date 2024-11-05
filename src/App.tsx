import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CompaniesPage from './pages/CompaniesPage';
import DepartmentsPage from './pages/DepartmentsPage';
import SpecializationsPage from './pages/SpecializationsPage';
import ColleaguesPage from './pages/ColleaguesPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirect empty path to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Main routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/specializations" element={<SpecializationsPage />} />
          <Route path="/colleagues" element={<ColleaguesPage />} />
          
          {/* Catch all other routes and redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;