const MersenneTwister = require('mersenne-twister');
const crypto = require('crypto'); // For hashing

function seedWithHash(seedValue) {
  // 1. Convert string/hex to numeric form (if necessary)
  let numericSeed;
  if (typeof seedValue === 'string') {
      numericSeed = stringToNumericSeed(seedValue);  // You'll need to implement this
  } else if (typeof seedValue === 'number') {
      numericSeed = seedValue;
  } else {
      throw new Error("Seed must be a string or number");
  }

  // 2. Hash for better seed quality
  const hash = crypto.createHash('sha256').update(String(numericSeed)).digest('hex');
  const hashAsNumber  = parseInt(hash, 16); // Hash now as a number

  // 3. Seed the Mersenne Twister 
  const generator = new MersenneTwister(hashAsNumber);
  return generator;
}

function randomInRange(min, max) {
    const range = max - min;  
    const randomDecimal = generator.random();
    return Math.floor(randomDecimal * range) + min;
}

// Example Usage
const stringGenerator = seedWithHash("This is my string seed");
// const hexGenerator = seedWithHash(0xDEADBEEF);
  
const randomNum = stringGenerator.random();
console.log(randomNum);
