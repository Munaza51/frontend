import React from 'react';

interface SpecializationSelectProps {
  specializations: any[];
  selectedSpecializationId: number | null;
  onChange: (specializationId: number) => void;
}

const SpecializationSelect: React.FC<SpecializationSelectProps> = ({ specializations, selectedSpecializationId, onChange }) => {
  return (
    <select
    className="select-box select-container" // Apply the class for styling
      value={selectedSpecializationId || ''}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="">Select Specialization</option>
      {specializations.map((specialization) => (
        <option key={specialization.id} value={specialization.id}>
          {specialization.name}
        </option>
      ))}
    </select>
  );
};

export default SpecializationSelect;
