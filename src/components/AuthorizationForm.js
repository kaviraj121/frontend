import { useState } from 'react';

const AuthorizationForm = ({ patient }) => {
  const [treatment, setTreatment] = useState('');
  const [doctorNotes, setDoctorNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/authorization', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patientId: patient._id, treatment, doctorNotes }),
    });
    alert('Authorization request submitted!');
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Prior Authorization</h2>
      <input
        type="text"
        placeholder="Treatment"
        value={treatment}
        onChange={(e) => setTreatment(e.target.value)}
        className="block w-full p-2 my-2"
        required
      />
      <textarea
        placeholder="Doctor's Notes"
        value={doctorNotes}
        onChange={(e) => setDoctorNotes(e.target.value)}
        className="block w-full p-2 my-2"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Submit Request
      </button>
    </form>
  );
};

export default AuthorizationForm;
