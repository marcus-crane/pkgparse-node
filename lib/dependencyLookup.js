var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var cheerio = require('cheerio')

function dependencyLookup(dependencies) {
  // Just logging a key (to know how to read the data) plus some visual styling
  console.log("Package Name => Description\n---------------------------")
  for (i in dependencies) {
    request
      // Get the package name
      .get('http://registry.npmjs.org/' + dependencies[i])
      .end(function(err, res) {
        res = JSON.parse(res.text)
        if (res) {
          moduleData = ''
          moduleData += res.name
          moduleData += " => "
          if (res.description !== undefined) {
            moduleData += res.description
          } else {
          moduleData += 'No description defined'
          }
          moduleData += "\n"
        } else {
          console.log("Invalid package name")
        }
        console.log(moduleData)
      })
  }
}

module.exports = dependencyLookup
