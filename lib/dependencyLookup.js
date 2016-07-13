var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var colors = require('colors')

function dependencyLookup(dependencies) {
  // Just logging a key (to know how to read the data) plus some visual styling
  console.log("Package Name => Description\n---------------------------")
  for (i in dependencies) {
    request
      // Get the package name
      .get('http://registry.npmjs.org/' + dependencies[i])
      .end(function(err, res) {
        res = JSON.parse(res.text)
        if (res.name !== undefined) {
          moduleData = ''
          moduleData += res.name
          moduleData += " => "
          if (res.description !== undefined) {
            moduleData += res.description
          } else {
          moduleData += 'No description defined'
          }
          moduleData += "\n"
          console.log(colors.green(moduleData))
        } else {
          console.log(colors.red("This package is invalid\n"))
        }
      })
  }
}

module.exports = dependencyLookup
