import React from 'react';

interface CompanySelectProps {
  companies: any[];
  selectedCompanyId: number | null;
  onChange: (companyId: number) => void;
}

const CompanySelect: React.FC<CompanySelectProps> = ({ companies, selectedCompanyId, onChange }) => {
  return (
    <select
      value={selectedCompanyId || ''}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="">Select Company</option>
      {companies.map((company) => (
        <option key={company.id} value={company.id}>
          {company.name}
        </option>
      ))}
    </select>
  );
};

export default CompanySelect;
