import React, { useState, useEffect } from 'react';
import ColleagueForm from '../components/ColleagueForm';
import { api } from '../api/api';

const ColleaguesPage: React.FC = () => {
  const [colleagues, setColleagues] = useState<any[]>([]);
  const [selectedColleague, setSelectedColleague] = useState<any | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(null);
  const [departmentId, setDepartmentId] = useState<number | null>(null);
  const [specializationId, setSpecializationId] = useState<number | null>(null);

  const fetchColleagues = async () => {
    try {
      if (companyId && departmentId && specializationId) {
        const response = await api.get(
          `/companies/${companyId}/departments/${departmentId}/specializations/${specializationId}/colleagues`
        );
        setColleagues(response.data);
      }
    } catch (error) {
      console.error('Error fetching colleagues:', error);
    }
  };

  useEffect(() => {
    fetchColleagues();
  }, [companyId, departmentId, specializationId]);

  const handleSave = () => {
    fetchColleagues();
    setSelectedColleague(null);
  };

  return (
    <div>
      <h2>Colleagues</h2>
      <ColleagueForm
        onSave={handleSave}
        existingColleague={selectedColleague}
        companyId={companyId}
        departmentId={departmentId}
        specializationId={specializationId}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {colleagues.map((colleague) => (
            <tr key={colleague.id}>
              <td>{colleague.name}</td>
              <td>{colleague.email}</td>
              <td>{colleague.age}</td>
              <td>
                <button onClick={() => setSelectedColleague(colleague)}>Edit</button>
                <button onClick={async () => {
                  if (companyId && departmentId && specializationId) {
                    await api.delete(
                      `/companies/${companyId}/departments/${departmentId}/specializations/${specializationId}/colleagues/${colleague.id}`
                    );
                    fetchColleagues();
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

export default ColleaguesPage;
