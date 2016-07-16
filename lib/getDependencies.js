var fs = require('fs')
var Promise = require('promise')
var promiseRead = Promise.denodeify(fs.readFile)
var dependencyLookup = require('./dependencyLookup')
var gatherDependencies = require('./gatherDependencies')

function getDependencies(fileLocation) {
  promiseRead(fileLocation, 'utf8')
    .then(function(unparsedPackage) {
      var parsedPackage = JSON.parse(unparsedPackage)
      var gatheredDependencies = gatherDependencies(parsedPackage)
      return gatheredDependencies
    })
    .then(function(dependencies) {

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
      console.error("Woops, something went wrong!")
    })
}

module.exports = getDependencies
