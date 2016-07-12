var getDependencies = require('./getDependencies')
var dependencyLookup = require('./dependencyLookup')

// Here is where we're going to be able to give a module name and get its dependencies
var moduleInput = process.argv[2]

// If we don't get a specific module, then run the getDependencies function
if (!moduleInput) {
  getDependencies()
} else {
  // Else get data about the module then pass it into getDependencies
  console.log('Fetching data about ' + moduleInput + '...' )
  dependencyLookup([moduleInput])
}
