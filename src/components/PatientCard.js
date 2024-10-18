import React, { useState, useEffect } from 'react';

const PatientCard = ({ patient }) => {
  const [open, setOpen] = useState(false);
  const [treatment, setTreatment] = useState('');
  const [doctorNotes, setDoctorNotes] = useState('');
  const [authorizations, setAuthorizations] = useState([]);

  // Fetch authorizations for this patient
  useEffect(() => {
    const fetchAuthorizations = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/authorizations?patientId=${patient._id}`);
        if (!response.ok) throw new Error('Failed to fetch authorizations');
        const data = await response.json();
        setAuthorizations(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchAuthorizations();
  }, [patient._id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/authorizations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: patient._id,
          treatment,
          doctorNotes,
          status: 'pending',
        }),
      });

      if (!response.ok) throw new Error('Failed to submit authorization');
      alert('Authorization submitted successfully!');
      handleClose();

      // Refresh the authorizations after submission
      const updatedResponse = await fetch(`http://localhost:5000/api/authorizations?patientId=${patient._id}`);
      const updatedData = await updatedResponse.json();
      setAuthorizations(updatedData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-xl font-semibold">{patient.name}</h2>
      <p className="text-gray-600">Age: {patient.age}</p>
      <p className="text-gray-600">Address: {patient.address}</p>
      <p className="text-gray-600">Medical History: {patient.medicalHistory}</p>
      <p className="text-gray-600">Treatment Plan: {patient.treatmentPlan}</p>

      {/* Authorization Status */}
      <h3 className="mt-4 font-medium">Authorizations:</h3>
      {authorizations.length > 0 ? (
        <ul className="mt-2">
          {authorizations.map((auth) => (
            <li key={auth._id} className="border-b py-2">
              <p>Treatment: {auth.treatment}</p>
              <p>Status: {auth.status}</p>
              <p>Doctor Notes: {auth.doctorNotes}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-2">No prior authorizations</p>
      )}

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleOpen}
      >
        Prior Treatment
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold">Prior Treatment Authorization</h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-sm font-medium">Treatment</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium">Doctor Notes</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={doctorNotes}
                  onChange={(e) => setDoctorNotes(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="ml-2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientCard;
