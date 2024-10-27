import React, { useState, useEffect } from 'react';
import { api } from '../api/api';

interface SpecializationFormProps {
  onSave: () => void;
  existingSpecialization?: any;
  companyId: number | null;
  departmentId: number | null;
}

const SpecializationForm: React.FC<SpecializationFormProps> = ({
  onSave,
  existingSpecialization,
  companyId,
  departmentId,
}) => {
  const [name, setName] = useState(existingSpecialization ? existingSpecialization.name : '');

  useEffect(() => {
    if (existingSpecialization) {
      setName(existingSpecialization.name);
    }
  }, [existingSpecialization]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId || !departmentId) {
      console.error('Please select a company and department first.');
      return;
    }

    try {
      if (existingSpecialization) {
        await api.put(
          `/companies/${companyId}/departments/${departmentId}/specializations/${existingSpecialization.id}`,
          { name }
        );
      } else {
        await api.post(`/companies/${companyId}/departments/${departmentId}/specializations`, { name });
      }
      onSave();
      setName('');
    } catch (error) {
      console.error('Error saving specialization:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="centered-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Specialization Name"
        required
      />
      <button type="submit">{existingSpecialization ? 'Update' : 'Create'} Specialization</button>
      </div>
    </form>
  );
};

export default SpecializationForm;
