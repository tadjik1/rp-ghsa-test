'use strict';

function titleCase(input) {
  if (typeof input !== 'string' || input.length === 0) return '';
  return input[0].toUpperCase() + input.slice(1);
}

module.exports = { titleCase };
