import React from 'react';

interface DepartmentSelectProps {
  departments: any[];
  selectedDepartmentId: number | null;
  onChange: (departmentId: number) => void;
}

const DepartmentSelect: React.FC<DepartmentSelectProps> = ({ departments, selectedDepartmentId, onChange }) => {
  return (
    <select
    className="select-box select-container" // Apply the class for styling
      value={selectedDepartmentId || ''}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="">Select Department</option>
      {departments.map((department) => (
        <option key={department.id} value={department.id}>
          {department.name}
        </option>
      ))}
    </select>
  );
};

export default DepartmentSelect;
