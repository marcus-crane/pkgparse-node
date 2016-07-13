#!/usr/bin/env node
// The above line is what makes it executable

var getDependencies = require('./lib/getDependencies')
var dependencyLookup = require('./lib/dependencyLookup')

// Here is where we're going to be able to give a module name and get its dependencies
switch(process.argv[2]) {
  case '-f':
    var fileLocation = (process.cwd() + "/package.json")
    break
  case '-s':
    var moduleInput = process.argv[3]
    break

  default:
    console.log("Please enter a valid flag.\n\nUse -f to fetch the package.json in your current directory.\n\nUse -s to search for a specific module.")
    break
}

// If we don't get a specific module, then run the getDependencies function
if (fileLocation) {
  getDependencies(fileLocation)
} else if (moduleInput) {
  // Else get data about the module then pass it into getDependencies
  console.log('\n Fetching data about ' + moduleInput + '...\n' )
  dependencyLookup([moduleInput])
}
