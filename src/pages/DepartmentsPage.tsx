import React, { useState, useEffect } from 'react';
import DepartmentForm from '../components/DepartmentForm';
import { api } from '../api/api';

const DepartmentsPage: React.FC = () => {
  const [departments, setDepartments] = useState<any[]>([
    // Initial data for demonstration
    { id: 1, name: "AI and Machine Learning" },
    { id: 2, name: "Cloud Computing" },
    { id: 3, name: "Productivity and Business Processes" },
    { id: 4, name: "AWS (Amazon Web Services)" },
    { id: 5, name: "iOS Development" },
  ]);
  const [selectedDepartment, setSelectedDepartment] = useState<any | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(1); // Set a default company ID for testing

  const fetchDepartments = async () => {
    try {
      if (companyId) {
        // Uncomment the following line when you have a real API
        // const response = await api.get(`/companies/${companyId}/departments`);
        // setDepartments(response.data);
        
        // For demonstration, we will keep the initial data
        console.log("Fetching departments...");
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, [companyId]);

  const handleSave = () => {
    fetchDepartments(); // Refresh the department list after saving
    setSelectedDepartment(null); // Reset the selected department
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
                    // Simulate deletion
                    setDepartments((prev) => prev.filter(d => d.id !== department.id));
                    console.log(`Deleted department with id: ${department.id}`);
                    fetchDepartments(); // Refresh the list after deletion
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