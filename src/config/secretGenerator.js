// Used to generate a random key for the JWT tokens used in .env file
// Run this file to generate a your access_token and refresh_token
// Copy the generated keys and paste them in .env file
const crypto = require('crypto');
const access_token = crypto.randomBytes(32).toString('hex');
const refresh_token = crypto.randomBytes(32).toString('hex');
console.table({ access_token, refresh_token });