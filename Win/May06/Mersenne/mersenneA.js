const MersenneTwister = require('mersenne-twister');

// Create a generator with a seed (for consistent output)
const generator = new MersenneTwister(12345); 

// Generate random numbers:
const randomNum1 = generator.random();  // A random number between 0 and 1  
const randomInt = generator.random_int(); // A random integer

console.log(randomNum1);
console.log(randomInt);
