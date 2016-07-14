var fs = require('fs')
var Promise = require('promise')
var promiseRead = Promise.denodeify(fs.readFile)
var dependencyLookup = require('./dependencyLookup')

// Here is where we're going to be able to give a module name and get its dependencies
function getDependencies(fileLocation) {
  promiseRead(fileLocation, 'utf8')
    .then(function(res) {
      // Parse the JSON file
      res = JSON.parse(res)

      // Initialise an empty array to push dependencies to
      var dependencies = []

      // Get the dev dependencies if they exist
      if (res.devDependencies !== undefined) {
        for (i in Object.keys(res.devDependencies)) {
          dependencies.push(Object.keys(res.devDependencies)[i])
        }
      }

      // Get the normal dependencies if they exist
      if (res.dependencies !== undefined) {
        for (i in Object.keys(res.dependencies)) {
          dependencies.push(Object.keys(res.dependencies)[i])
        }
      }

      // If neither exist, we can't do anything with that file!
      if (res.dependencies & res.devDependencies == undefined) {
        console.log("Your package doesn't even have any dependencies...")
      }

      // Sort them because we don't care what was dev and what was normal
      dependencies.sort()
      // Return those into the promise below
      return dependencies
    })
    .then(function(dependencies) {
      // Get rid of duplicates
      for (i in dependencies) {
        if (dependencies[i] === dependencies[i - 1]) {
          dependencies.splice(i, 1)
        }
      }
      return dependencies
    })
    // Lookup the dependencies
    .then(function(dependencies) {
      dependencyLookup(dependencies)
    })
    .catch(function(err) {
      console.log("Woops, something went wrong!")
    })
}

module.exports = getDependencies
