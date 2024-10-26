import React, { useState, useEffect } from 'react';
import SpecializationForm from '../components/SpecializationForm';
import { api } from '../api/api';

const SpecializationsPage: React.FC = () => {
  const [specializations, setSpecializations] = useState<any[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState<any | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(null);
  const [departmentId, setDepartmentId] = useState<number | null>(null);

  const fetchSpecializations = async () => {
    try {
      if (companyId && departmentId) {
        const response = await api.get(`/companies/${companyId}/departments/${departmentId}/specializations`);
        setSpecializations(response.data);
      }
    } catch (error) {
      console.error('Error fetching specializations:', error);
    }
  };

  useEffect(() => {
    fetchSpecializations();
  }, [companyId, departmentId]);

  const handleSave = () => {
    fetchSpecializations();
    setSelectedSpecialization(null);
  };

  return (
    <div>
      <h2>Specializations</h2>
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
                <button onClick={async () => {
                  if (companyId && departmentId) {
                    await api.delete(`/companies/${companyId}/departments/${departmentId}/specializations/${specialization.id}`);
                    fetchSpecializations();
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

export default SpecializationsPage;
