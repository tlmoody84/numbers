"use client"
import React, { useState, useEffect } from 'react';
import Dice from './Roller';

const DiceRoller = () => {
  const [numDice, setNumDice] = useState(1);
  const [rolls, setRolls] = useState([]);

  const handleNumberChange = (event) => {
    setNumDice(parseInt(event.target.value));
  };

  const handleRollDice = () => {
    const newRolls = [];
    for (let i = 0; i < numDice; i++) {
      newRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    setRolls(newRolls);
  };

  return (
    <div>
      <input type="number" value={numDice} onChange={handleNumberChange} min="1" max="6" />
      <button onClick={handleRollDice}>Roll Dice</button>
      {rolls.length > 0 && (
        <div>
          {rolls.map((roll, index) => (
            <Dice key={index} value={roll} />
          ))}
          <p>Rolled: {rolls.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Roller;