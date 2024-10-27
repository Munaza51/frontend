import React, { useState, useEffect } from 'react';
import CompanySelect from '../components/CompanySelect';
import DepartmentSelect from '../components/DepartmentSelect';
import SpecializationSelect from '../components/SpecializationSelect';
import ColleaguesTable from '../components/ColleaguesTable';

// Data for companies, departments, specializations, and colleagues
const companies = [
  {
    id: 1,
    name: "Google",
    departments: [
      {
        id: 1,
        name: "AI and Machine Learning",
        specializations: [
          {
            id: 1,
            name: "Natural Language Processing (NLP)",
            colleagues: [
              { id: 1, name: "John Doe", email: "johndoe@google.com", age: 28 },
              { id: 2, name: "Sara Lee", email: "saralee@google.com", age: 27 },
              { id: 3, name: "Alex Brown", email: "alexbrown@google.com", age: 29 }
            ]
          },
          {
            id: 2,
            name: "Computer Vision",
            colleagues: [
              { id: 4, name: "Chris Evans", email: "chrisevans@google.com", age: 30 },
              { id: 5, name: "Anna Taylor", email: "annataylor@google.com", age: 25 }
            ]
          },
          {
            id: 3,
            name: "Reinforcement Learning (RL)",
            colleagues: [
              { id: 6, name: "Olivia Adams", email: "oliviaadams@google.com", age: 26 },
              { id: 7, name: "Mason Clark", email: "masonclark@google.com", age: 27 }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Cloud Computing",
        specializations: [
          {
            id: 4,
            name: "Cloud Infrastructure",
            colleagues: [
              { id: 8, name: "Henry Wilson", email: "henrywilson@google.com", age: 32 },
              { id: 9, name: "Sophia Martinez", email: "sophiamartinez@google.com", age: 31 }
            ]
          },
          {
            id: 5,
            name: "Cloud Security",
            colleagues: [
              { id: 10, name: "Emma Lopez", email: "emmalopez@google.com", age: 29 },
              { id: 11, name: "James Hill", email: "jameshill@google.com", age: 28 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Microsoft",
    departments: [
      {
        id: 3,
        name: "Productivity and Business Processes",
        specializations: [
          {
            id: 6,
            name: "Microsoft Office Suite",
            colleagues: [
              { id: 12, name: "Lucas Green", email: "lucasgreen@microsoft.com", age: 33 },
              { id: 13, name: "Ava White", email: "avawhite@microsoft.com", age: 30 }
            ]
          },
          {
            id: 7,
            name: "Business Solutions",
            colleagues: [
              { id: 14, name: "Daniel Hall", email: "danielhall@microsoft.com", age: 34 },
              { id: 15, name: "Zoe King", email: "zoeking@microsoft.com", age: 29 }
            ]
          },
          {
            id: 8,
            name: "Enterprise Services",
            colleagues: [
              { id: 16, name: "Jack Scott", email: "jackscott@microsoft.com", age: 31 },
              { id: 17, name: "Amelia Perez", email: "ameliaperez@microsoft.com", age: 28 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Amazon",
    departments: [
      {
        id: 4,
        name: "AWS (Amazon Web Services)",
        specializations: [
          {
            id: 9,
            name: "Web Development",
            colleagues: [
              { id: 18, name: "Noah Baker", email: "noahbaker@amazon.com", age: 32 },
              { id: 19, name: "Ella Edwards", email: "ellaedwards@amazon.com", age: 30 }
            ]
          },
          {
            id: 10,
            name: "App Development",
            colleagues: [
              { id: 20, name: "Liam Carter", email: "liamcarter@amazon.com", age: 28 },
              { id: 21, name: "Charlotte Miller", email: "charlottemiller@amazon.com", age: 27 }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Apple",
    departments: [
      {
        id: 5,
        name: "iOS Development",
        specializations: [
          {
            id: 11,
            name: "Web Development",
            colleagues: [
              { id: 22, name: "William Turner", email: "williamturner@apple.com", age: 29 },
              { id: 23, name: "Mia Stewart", email: "miastewart@apple.com", age: 27 }
            ]
          },
          {
            id: 12,
            name: "App Development",
            colleagues: [
              { id: 24, name: "Emily Barnes", email: "emilybarnes@apple.com", age: 28 },
              { id: 25, name: "Benjamin Russell", email: "benjaminrussell@apple.com", age: 30 }
            ]
          }
        ]
      }
    ]
  }
];

const CompaniesPage: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<number | null>(null);
  const [selectedSpecializationId, setSelectedSpecializationId] = useState<number | null>(null);
  const [filteredColleagues, setFilteredColleagues] = useState<any[]>([]);

  useEffect(() => {
    let colleagues = [];

    if (selectedSpecializationId) {
      const selectedCompany = companies.find(c => c.id === selectedCompanyId);
      const selectedDepartment = selectedCompany?.departments.find(d => d.id === selectedDepartmentId);
      const selectedSpecialization = selectedDepartment?.specializations.find(s => s.id === selectedSpecializationId);
      colleagues = selectedSpecialization?.colleagues || [];
    } else if (selectedDepartmentId) {
      const selectedCompany = companies.find(c => c.id === selectedCompanyId);
      const selectedDepartment = selectedCompany?.departments.find(d => d.id === selectedDepartmentId);
      colleagues = selectedDepartment?.specializations.flatMap(s => s.colleagues) || [];
    } else if (selectedCompanyId) {
      const selectedCompany = companies.find(c => c.id === selectedCompanyId);
      colleagues = selectedCompany?.departments.flatMap(d => d.specializations.flatMap(s => s.colleagues)) || [];
    } else {
      colleagues = companies.flatMap(c => c.departments.flatMap(d => d.specializations.flatMap(s => s.colleagues)));
    }

    setFilteredColleagues(colleagues);
  }, [selectedCompanyId, selectedDepartmentId, selectedSpecializationId]);

  const selectedCompany = companies.find(c => c.id === selectedCompanyId);
  const departments = selectedCompany ? selectedCompany.departments : [];
  const selectedDepartment = departments.find(d => d.id === selectedDepartmentId);
  const specializations = selectedDepartment ? selectedDepartment.specializations : [];

  return (
    <div>
      <h2>Manage Tech Companies</h2>
      <CompanySelect
        companies={companies}
        selectedCompanyId={selectedCompanyId}
        onChange={(id) => {
          setSelectedCompanyId(id);
          setSelectedDepartmentId(null);
          setSelectedSpecializationId(null);
        }}
      />
      <DepartmentSelect
        departments={departments}
        selectedDepartmentId={selectedDepartmentId}
        onChange={(id) => {
          setSelectedDepartmentId(id);
          setSelectedSpecializationId(null);
        }}
      />
      <SpecializationSelect
        specializations={specializations}
        selectedSpecializationId={selectedSpecializationId}
        onChange={setSelectedSpecializationId}
      />
      <ColleaguesTable colleagues={filteredColleagues} />
      
      <style>
        {`
          .companies-page {
            text-align: center;
            padding: 20px;
          }

          .select-container {
            margin: 10px auto;
            padding: 10px;
            font-size: 12px;
            width: 400px;
            display: block;
            text-align: center;
          }          
        `}
      </style>

    </div>
  );
};

export default CompaniesPage;
