import React, { useState } from 'react';
import SpecializationForm from '../components/SpecializationForm';

// Initial data for specializations
const specializationsData = [
  { id: 1, name: "Natural Language Processing (NLP)" },
  { id: 2, name: "Computer Vision" },
  { id: 3, name: "Reinforcement Learning (RL)" },
  { id: 4, name: "Cloud Infrastructure" },
  { id: 5, name: "Cloud Security" },
  { id: 6, name: "Microsoft Office Suite" },
  { id: 7, name: "Business Solutions" },
  { id: 8, name: "Enterprise Services" },
  { id: 9, name: "Web Development" },
  { id: 10, name: "App Development" },
  { id: 11, name: "iOS Development" },
  { id: 12, name: "App Development" }, // Note: Duplicate name, consider renaming
];

const SpecializationsPage: React.FC = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<any | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(1); // Default to Google
  const [departmentId, setDepartmentId] = useState<number | null>(1); // Default to first department of Google

  // Here we can filter specializations based on the selected company and department
  // For this example, we'll just display all specializations
  const specializations = specializationsData; // Use all specializations for demonstration

  const handleSave = () => {
    // Logic to refresh specializations or handle saved specialization
    setSelectedSpecialization(null); // Reset the selected specialization
  };

  return (
    <div>
      <h2 className="slide-up">Specializations</h2>
      <SpecializationForm onSave={handleSave} existingSpecialization={selectedSpecialization} companyId={companyId} departmentId={departmentId} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {specializations.map((specialization) => (
            <tr key={specialization.id}>
              <td>{specialization.name}</td>
              <td>
                <button onClick={() => setSelectedSpecialization(specialization)}>Edit</button>
                <button onClick={() => {
                  // Logic to delete specialization (not implemented here)
                  console.log(`Delete specialization with id: ${specialization.id}`);
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

export default SpecializationsPage;