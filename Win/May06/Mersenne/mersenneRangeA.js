const MersenneTwister = require('mersenne-twister');
const generator = new MersenneTwister(); 

function randomInRange(min, max) {
  const range = max - min;  
  const randomDecimal = generator.random();
  return Math.floor(randomDecimal * range) + min;
}

const randomNum = randomInRange(5, 15);
console.log(randomNum); 

console.log(randomInRange(10, 20));   // Random integer between 10 and 20
console.log(randomInRange(0.5, 3.8));  // Random floating-point number between 0.5 and 3.8
