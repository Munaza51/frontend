import React, { useState } from 'react';
import ColleagueForm from '../components/ColleagueForm';

// Sample data for colleagues
const colleaguesData = [
  { id: 1, name: "John Doe", email: "johndoe@google.com", age: 28 },
  { id: 2, name: "Sara Lee", email: "saralee@google.com", age: 27 },
  { id: 3, name: "Alex Brown", email: "alexbrown@google.com", age: 29 },
  { id: 4, name: "Chris Evans", email: "chrisevans@google.com", age: 30 },
  { id: 5, name: "Anna Taylor", email: "annataylor@google.com", age: 25 },
  { id: 6, name: "Olivia Adams", email: "oliviaadams@google.com", age: 26 },
  { id: 7, name: "Mason Clark", email: "masonclark@google.com", age: 27 },
  { id: 8, name: "Henry Wilson", email: "henrywilson@google.com", age: 32 },
  { id: 9, name: "Sophia Martinez", email: "sophiamartinez@google.com", age: 31 },
  { id: 10, name: "Emma Lopez", email: "emmalopez@google.com", age: 29 },
  { id: 11, name: "James Hill", email: "jameshill@google.com", age: 28 },
  { id: 12, name: "Lucas Green", email: "lucasgreen@microsoft.com", age: 33 },
  { id: 13, name: "Ava White", email: "avawhite@microsoft.com", age: 30 },
  { id: 14, name: "Daniel Hall", email: "danielhall@microsoft.com", age: 34 },
  { id: 15, name: "Zoe King", email: "zoeking@microsoft.com", age: 29 },
  { id: 16, name: "Jack Scott", email: "jackscott@microsoft.com", age: 31 },
  { id: 17, name: "Amelia Perez", email: "ameliaperez@microsoft.com", age: 28 },
  { id: 18, name: "Noah Baker", email: "noahbaker@amazon.com", age: 32 },
  { id: 19, name: "Ella Edwards", email: "ellaedwards@amazon.com", age: 30 },
  { id: 20, name: "Liam Carter", email: "liamcarter@amazon.com", age: 28 },
  { id: 21, name: "Charlotte Miller", email: "charlottemiller@amazon.com", age: 27 },
  { id: 22, name: "William Turner", email: "williamturner@apple.com", age: 29 },
  { id: 23, name: "Mia Stewart", email: "miastewart@apple.com", age: 27 },
  { id: 24, name: "Emily Barnes", email: "emilybarnes@apple.com", age: 28 },
  { id: 25, name: "Benjamin Russell", email: "benjaminrussell@apple.com", age: 30 },
];

const ColleaguesPage: React.FC = () => {
  const [colleagues, setColleagues] = useState<any[]>(colleaguesData);
  const [selectedColleague, setSelectedColleague] = useState<any | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(1); // Default company ID
  const [departmentId, setDepartmentId] = useState<number | null>(1); // Default department ID
  const [specializationId, setSpecializationId] = useState<number | null>(1); // Default specialization ID

  const handleSave = () => {
    // Logic to refresh colleagues or handle saved colleague
    setSelectedColleague(null); // Reset the selected colleague
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
                <button onClick={() => {
                  // Logic to delete colleague (not implemented here)
                  console.log(`Delete colleague with id: ${colleague.id}`);
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