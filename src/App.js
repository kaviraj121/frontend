import { useState } from 'react';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import AuthorizationForm from './components/AuthorizationForm';

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="flex">
      <PatientList selectPatient={setSelectedPatient} />
      <PatientDetails patient={selectedPatient} />
      {selectedPatient && <AuthorizationForm patient={selectedPatient} />}
    </div>
  );
}

export default App;
