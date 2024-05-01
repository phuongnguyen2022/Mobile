import React, { useState } from 'react';
import {View } from "react-native";
import styles from "./style";

function DigitSumCalculator() {
  const [number, setNumber] = useState('');
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    const numberStr = number.toString();

    const firstDigit = parseInt(numberStr.charAt(0));
    const lastDigit = parseInt(numberStr.charAt(numberStr.length - 1));

    const sumDigits = firstDigit + lastDigit;

    setSum(sumDigits);
  };

  return (
    <View style = {[styles.box, {backgroundColor: "#7ce0f9"}]}>
      <h2>Digit Sum Calculator</h2>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum of the first and last digits: {sum}</p>
    </View>
  );
}

export default DigitSumCalculator;
