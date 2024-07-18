"use client"
import React, { useState, useEffect } from "react";
// import React from 'react';

const Dice = ({ value }) => {
  const diceFaces = {
    1: '...',
    2: '..\n..\n',
    3: '...\n.\n...',
    4: '...\n..\n..',
    5: '...\n.\n.!.',
    6: '...!.!.!',
  };

  return (
    <div className="dice">
      {diceFaces[value]}
    </div>
  );
};

export default Dice;