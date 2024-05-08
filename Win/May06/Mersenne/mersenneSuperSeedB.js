const MersenneTwister = require('mersenne-twister');
const crypto = require('crypto'); // For hashing

function seedWithHash(generator, seedString) {
  const hash = crypto.createHash('sha256').update(seedString).digest('hex');
  const seedValue = parseInt(hash, 16); // Convert hex hash to a number
  generator.init_seed(seedValue);  // Assuming the library has an init_seed method
}

// Example usage:
const generator = new MersenneTwister();
seedWithHash(generator, "My secret string");

const randomNum = generator.random();
console.log(randomNum);
