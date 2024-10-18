import { useEffect, useState } from 'react';

const PatientList = ({ selectPatient }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/patients')
      .then(res => res.json())
      .then(data => setPatients(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li
            key={patient._id}
            className="cursor-pointer hover:bg-gray-200 p-2"
            onClick={() => selectPatient(patient)}
          >
            {patient.name} - {patient.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
