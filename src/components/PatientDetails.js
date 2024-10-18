const PatientDetails = ({ patient }) => {
    if (!patient) return <p>Select a patient to see details.</p>;
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>Medical History: {patient.medicalHistory}</p>
        <p>Treatment Plan: {patient.treatmentPlan}</p>
      </div>
    );
  };
  
  export default PatientDetails;
  