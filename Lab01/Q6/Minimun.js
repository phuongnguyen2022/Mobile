import React, { useState } from 'react';

function MinimumFinder() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [minimum, setMinimum] = useState(null);

  const findMinimum = () => {
    const min = Math.min(parseInt(num1), parseInt(num2), parseInt(num3));
    setMinimum(min);
  };

  return (
    <div>
      <h2>Minimum Finder</h2>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </label>
      <label>
        Number 2:
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </label>
      <label>
        Number 3:
        <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} />
      </label>
      <button onClick={findMinimum}>Find Minimum</button>
      {minimum !== null && <p>Minimum: {minimum}</p>}
    </div>
  );
}

export default MinimumFinder;
