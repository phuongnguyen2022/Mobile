import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';

function App() {
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdate = (message) => {
    setSuccessMessage(message);
  };

  return (
    <div>
      <h1>Employee Information Entry</h1>
      <EmployeeForm onUpdate={handleUpdate} />
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default App;
