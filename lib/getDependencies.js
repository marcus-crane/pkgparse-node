var fs = require('fs')
var Promise = require('promise')
var promiseRead = Promise.denodeify(fs.readFile)
var dependencyLookup = require('./dependencyLookup')

// Here is where we're going to be able to give a module name and get its dependencies
function getDependencies() {
  promiseRead(__dirname + '/../package.json', 'utf8')
    .then(function(res) {
      // Parse the JSON file
      console.log(typeof res)
      res = JSON.parse(res)
      var dependencies = []

      // Get the dev dependencies
      for (i in Object.keys(res.devDependencies)) {
        dependencies.push(Object.keys(res.devDependencies)[i])
      }

      // Get the normal dependencies
      for (i in Object.keys(res.dependencies)) {
        dependencies.push(Object.keys(res.dependencies)[i])
      }

      // Sort them because we don't care what was dev and what was normal
      dependencies.sort()
      // Return those into the promise below
      console.log("Sorting")
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
    .then(function(dependencies) {
      dependencyLookup(dependencies)
    })
    .catch(function(err) {
      console.log("Woops, something went wrong!", err)
    })
}

module.exports = getDependencies
