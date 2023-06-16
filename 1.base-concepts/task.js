"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  let result = [];

  if (discriminant < 0) {
    
    return result;
  } else if (discriminant === 0) {
    
    result.push(-b / (2 * a));
  } else {
    
    result.push((-b + Math.sqrt(discriminant)) / (2 * a));
    result.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return false;
  }

  percent = percent / 100; 
  const loanBody = amount - contribution; 
  const monthlyPercent = percent / 12; 
  const exponent = Math.pow(1 + monthlyPercent, countMonths); 
  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (exponent - 1)); 
  const totalAmount = monthlyPayment * countMonths; 

  return +totalAmount.toFixed(2); 
}