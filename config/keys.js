// Use different credentials for Dev or Prod environment.
if (process.env.NODE_ENV === 'production') {
    // We are in Production environment
    // Return production set of keys
    module.exports = require('./prod');
} else {
    // We are in Development environmen
    // Return development keys
    module.exports = require('./dev');
}