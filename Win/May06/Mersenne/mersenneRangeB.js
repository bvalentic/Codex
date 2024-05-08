const MersenneTwister = require('mersenne-twister');

function generateRandomNumberInRange(min, max) {
  const generator = new MersenneTwister(); // Create a new generator each time
  const randomDecimal = generator.random();

  // Scale and shift the random number to fit the desired range
  const scaled = randomDecimal * (max - min); 
  const shifted = scaled + min;

  return Math.floor(shifted); // Round down to get an integer within the range
}

// Example usage:
const randomNumber = generateRandomNumberInRange(5, 15); // Random number between 5 and 15 (inclusive)
console.log(randomNumber); 
