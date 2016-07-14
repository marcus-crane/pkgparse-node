var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var colors = require('colors')

function dependencyLookup(dependencies) {
  // Just logging a key (to know how to read the data) plus some visual styling
  console.log("Package Name => Description\n---------------------------")
  for (i in dependencies) {
    request
      // Get the package name from the NPM registry
      .get('http://registry.npmjs.org/' + dependencies[i])
      .end(function(err, res) {
        // We don't actually know if these fields will have text so let's build
        // Assuming they aren't there. A name is always required
        if (err) {
          console.log(colors.red("Either you're offline or NPM is down!"))
        } else {

        // Convert the JSON string into an object we can manipulate
        res = JSON.parse(res.text)

        // If the JSON string isn't invalid, output it
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
            // Apply nice colours
            console.log(colors.green(moduleData))
          } else {
            console.log(colors.red("This package is invalid\n"))
          }
        }
      })
  }
}

module.exports = dependencyLookup
