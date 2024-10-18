// src/App.js
import React from 'react';
import PatientList from './components/PatientList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">Patient Management System</h1>
      <PatientList />
    </div>
  );
};

export default App;
