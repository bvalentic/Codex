const MersenneTwister = require('mersenne-twister');

// Seed with a specific value (for reproducibility)
const okgenerator = new MersenneTwister(12345);

// Seed with a high-quality random number (recommended)
const crypto = require('crypto');
const seed = crypto.randomBytes(4).readUInt32LE(); // Example using crypto module
const generator = new MersenneTwister(seed);
