'use strict';

function sum(values) {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { sum, clamp };
