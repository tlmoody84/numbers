"use client"
import { useState } from "react";
import HomePage from "./HomePage"
import React from "react";

function rollDice(numDice, numSides) {
  // Function to roll a single die with a specified number of sides
  function rollSingleDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  const rolls = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(rollSingleDie(numSides));
  }
  return rolls;
}

function checkRules(diceRolls, rules) {
  // Function to check the dice rolls against different game rules
  const results = [];
  for (const rule of rules) {
    let ruleMet = true;
    switch (rule.type) {
      case "sum":
        const targetSum = rule.target;
        const actualSum = diceRolls.reduce((acc, roll) => acc + roll, 0);
        ruleMet = actualSum === targetSum;
        break;
      case "allEqual":
        const allEqual = diceRolls.every((roll) => roll === diceRolls[0]);
        ruleMet = allEqual;
        break;
      case "atLeastOne":
        const targetValue = rule.target;
        ruleMet = diceRolls.some((roll) => roll === targetValue);
        break;
      default:
        console.error(`Unknown rule type: ${rule.type}`);
    }
    results.push({ rule: rule.description, passed: ruleMet });
  }
  return results;
}

// Example usage
const numDice = 2;
const numSides = 6;
const diceRolls = rollDice(numDice, numSides);
console.log(`Rolled: ${diceRolls.join(', ')}`);

const rules = [
  { type: "sum", target: 7, description: "Sum of all dice is 7" },
  { type: "allEqual", description: "All dice rolls are the same" },
  { type: "atLeastOne", target: 5, description: "At least one die rolls a 5" },
];

const ruleResults = checkRules(diceRolls, rules);
ruleResults.forEach((result) => {
  console.log(`${result.rule}: ${result.passed ? 'Passed' : 'Failed'}`);
});


