import React, { useState } from 'react';

function EmployeeForm({ onUpdate }) {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const successMessage = `Employee ${fullName} updated successfully!`;
    onUpdate(successMessage);
    setFullName('');
    setAge('');
    setOccupation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Occupation:
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default EmployeeForm;
