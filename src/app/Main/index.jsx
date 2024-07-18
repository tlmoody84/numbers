"use client"
import React, { useState, useEffect } from "react";
// import React from 'react';
import DiceRoller from '../components/DiceRoller';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Dice Roller</h1>
      <DiceRoller />
    </div>
  );
};

export default HomePage;