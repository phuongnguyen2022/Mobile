import React, { useState } from 'react';

function HailstoneSequence() {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);

  const generateSequence = () => {
    const num = parseInt(number);
    const sequenceArray = [num];
    let currentNumber = num;

    while (currentNumber !== 1) {
      if (currentNumber % 2 === 0) {
        currentNumber /= 2;
      } else {
        currentNumber = currentNumber * 3 + 1;
      }
      sequenceArray.push(currentNumber);
    }

    setSequence(sequenceArray);
  };

  return (
    <div>
      <h2>Hailstone Sequence</h2>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button onClick={generateSequence}>Generate Sequence</button>
      <p>Sequence: {sequence.join(', ')}</p>
    </div>
  );
}

export default HailstoneSequence;
