import React, { useState, useEffect } from 'react';
import { api } from '../api/api';

interface DepartmentFormProps {
  onSave: () => void;
  existingDepartment?: any;
  companyId: number | null; // The selected company ID
}

const DepartmentForm: React.FC<DepartmentFormProps> = ({ onSave, existingDepartment, companyId }) => {
  const [name, setName] = useState(existingDepartment ? existingDepartment.name : '');

  useEffect(() => {
    if (existingDepartment) {
      setName(existingDepartment.name);
    }
  }, [existingDepartment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId) {
      console.error('Please select a company first.');
      return;
    }

    try {
      if (existingDepartment) {
        await api.put(`/companies/${companyId}/departments/${existingDepartment.id}`, { name });
      } else {
        await api.post(`/companies/${companyId}/departments`, { name });
      }
      onSave();
      setName('');
    } catch (error) {
      console.error('Error saving department:', error);
    }
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="centered-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Department Name"
        required
      />
      <button type="submit">{existingDepartment ? 'Update' : 'Create'} Department</button>
      </div>
    </form>
  );
};

export default DepartmentForm;