import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/specializations" element={<SpecializationsPage />} />
          <Route path="/colleagues" element={<ColleaguesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
