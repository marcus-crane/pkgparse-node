var fs = require('fs')
var Promise = require('promise')
var chalk = require('chalk')
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
      console.error(chalk.red("Woops, something went wrong!\n"))
      console.error(chalk.cyan("Things to try: \n\n   Is the path to your package.json file correct?\n   Is there actually a package.json file in this directory?    \n   Are you sure you're online?   \n   Perhaps NPM is down? Try http://isup.me/npmjs.org\n   "))
    })
}

module.exports = getDependencies
