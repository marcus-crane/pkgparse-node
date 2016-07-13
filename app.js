var getDependencies = require('./lib/getDependencies')
var dependencyLookup = require('./lib/dependencyLookup')

// Here is where we're going to be able to give a module name and get its dependencies
var moduleInput = process.argv[2]

// If we don't get a specific module, then run the getDependencies function
if (!moduleInput) {
  getDependencies()
} else {
  // Else get data about the module then pass it into getDependencies
  console.log('\n Fetching data about ' + moduleInput + '...\n' )
  dependencyLookup([moduleInput])
}
