import React, { useState, useEffect } from 'react';
import { api } from '../api/api';

interface CompanyFormProps {
  onSave: () => void;
  existingCompany?: any; // Pass existing data if editing
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onSave, existingCompany }) => {
  const [name, setName] = useState(existingCompany ? existingCompany.name : '');

  useEffect(() => {
    if (existingCompany) {
      setName(existingCompany.name);
    }
  }, [existingCompany]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (existingCompany) {
        await api.put(`/companies/${existingCompany.id}`, { name });
      } else {
        await api.post('/companies', { name });
      }
      onSave();
      setName('');
    } catch (error) {
      console.error('Error saving company:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Company Name"
        required
      />
      <button type="submit">{existingCompany ? 'Update' : 'Create'} Company</button>
    </form>
  );
};

export default CompanyForm;
