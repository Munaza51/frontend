import React from 'react';

interface Colleague {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface ColleaguesTableProps {
  colleagues: Colleague[];
}

const ColleaguesTable: React.FC<ColleaguesTableProps> = ({ colleagues }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {colleagues.map((colleague, index) => (
          <tr key={colleague.id}>
            <td>{index + 1}</td>
            <td>{colleague.name}</td>
            <td>{colleague.email}</td>
            <td>{colleague.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColleaguesTable;
