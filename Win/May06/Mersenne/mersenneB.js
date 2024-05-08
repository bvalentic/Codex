const MersenneTwister = require('mersenne-twister');

// Create a Mersenne Twister generator (using a default seed)
const generator = new MersenneTwister();

// Generate some random numbers
for (let i = 0; i < 10; i++) {
  const randomNum = generator.random();  // Returns a random number between 0 (inclusive) and 1 (exclusive)
  console.log(randomNum);
}

// Seeding the generator (for reproducibility)
const seed = 12345;
const seededGenerator = new MersenneTwister(seed); 