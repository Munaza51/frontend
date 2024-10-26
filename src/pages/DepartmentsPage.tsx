import React, { useState, useEffect } from 'react';
import DepartmentForm from '../components/DepartmentForm';
import { api } from '../api/api';

const DepartmentsPage: React.FC = () => {
  const [departments, setDepartments] = useState<any[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<any | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(null);

  const fetchDepartments = async () => {
    try {
      if (companyId) {
        const response = await api.get(`/companies/${companyId}/departments`);
        setDepartments(response.data);
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, [companyId]);

  const handleSave = () => {
    fetchDepartments();
    setSelectedDepartment(null);
  };

  return (
    <div>
      <h2>Departments</h2>
      <DepartmentForm onSave={handleSave} existingDepartment={selectedDepartment} companyId={companyId} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.name}</td>
              <td>
                <button onClick={() => setSelectedDepartment(department)}>Edit</button>
                <button onClick={async () => {
                  if (companyId) {
                    await api.delete(`/companies/${companyId}/departments/${department.id}`);
                    fetchDepartments();
                  }
                }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentsPage;
