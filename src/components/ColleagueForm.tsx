import React, { useState, useEffect } from 'react';
import { api } from '../api/api';

interface ColleagueFormProps {
  onSave: () => void;
  existingColleague?: any;
  companyId: number | null;
  departmentId: number | null;
  specializationId: number | null;
}

const ColleagueForm: React.FC<ColleagueFormProps> = ({
  onSave,
  existingColleague,
  companyId,
  departmentId,
  specializationId,
}) => {
  const [name, setName] = useState(existingColleague ? existingColleague.name : '');
  const [email, setEmail] = useState(existingColleague ? existingColleague.email : '');
  const [age, setAge] = useState(existingColleague ? existingColleague.age : '');

  useEffect(() => {
    if (existingColleague) {
      setName(existingColleague.name);
      setEmail(existingColleague.email);
      setAge(existingColleague.age);
    }
  }, [existingColleague]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId || !departmentId || !specializationId) {
      console.error('Please select a company, department, and specialization first.');
      return;
    }

    try {
      const payload = { name, email, age };
      if (existingColleague) {
        await api.put(
          `/companies/${companyId}/departments/${departmentId}/specializations/${specializationId}/colleagues/${existingColleague.id}`,
          payload
        );
      } else {
        await api.post(
          `/companies/${companyId}/departments/${departmentId}/specializations/${specializationId}/colleagues`,
          payload
        );
      }
      onSave();
      setName('');
      setEmail('');
      setAge('');
    } catch (error) {
      console.error('Error saving colleague:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Colleague Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Colleague Email"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Colleague Age"
        required
      />
      <button type="submit">{existingColleague ? 'Update' : 'Create'} Colleague</button>
    </form>
  );
};

export default ColleagueForm;
