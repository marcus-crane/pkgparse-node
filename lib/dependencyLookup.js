var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var cheerio = require('cheerio')

function dependencyLookup(dependencies) {
  // Just logging a key (to know how to read the data) plus some visual styling
  console.log("Package Name => Description\n---------------------------")
  for (i in dependencies) {
    request
      // Get the package name
      .get('http://npmjs.com/package/' + dependencies[i])
      // Cheerio will take the NPM page and load it into cheerio
      .end(function(err, res) {
        var $ = cheerio.load(res.text)
        // For each entry, we want to get the package-description class
        $('.package-description').each(function(index, element) {
          // We're getting the package name and package description via DOM traversal
          // Intially, it goes to package-description, gets heading via traversal then returns the package desc
          // This is how I'm getting around what would otherwise be a huge async issue
          console.log(element.parent.children[0].next.children[1].children[0].data, " => ", element.children[0].data, "\n")
        })
      })
  }
}

module.exports = dependencyLookup
