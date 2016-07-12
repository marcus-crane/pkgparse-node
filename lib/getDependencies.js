var fs = require('fs')
var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var promiseRead = Promise.denodeify(fs.readFile)
var cheerio = require('cheerio')

var moduleInput = process.argv[2]

  if (!moduleInput) {
    promiseRead('../package.json', 'utf8')
      .then(function(res) {
        // Parse the JSON file
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
      .then(function(cleansedDeps) {
        var descs = []
        console.log("Package Name => Description\n---------------------------")
        for (i in cleansedDeps) {
          request
            .get('http://npmjs.com/package/' + cleansedDeps[i])
            .end(function(err, res) {
              var $ = cheerio.load(res.text)
              $('.package-description').each(function(index, element) {
                console.log(element.parent.children[0].next.children[1].children[0].data, " => ", element.children[0].data)
                console.log("")
              })
            })
        }
      })
      .catch(function(err) {
        console.log("Failed!")
      })
    } else {
      console.log('Fetching data about ' + moduleInput + '...' )
    }

module.exports = promiseRead
