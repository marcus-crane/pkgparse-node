var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var chalk = require('chalk')

function moduleLookup(dependencies) {
  for (i in dependencies) {
    request
      .get('http://registry.npmjs.org/' + dependencies[i])
      .end(function(err, res) {
        if (res === undefined) {
          console.error(chalk.red("Looks like you're offline"))
        } else {
          res = JSON.parse(res.text)

          if (res !== undefined) {
            var moduleData = '↳ '
            moduleData += res.name + " => "

            if (res.description !== undefined) {
              moduleData += res.description
            } else {
              moduleData += 'No description defined'
            }

            console.log(chalk.green(moduleData))
          } else {
            console.log(chalk.red("That package doesn't exist"))
          }
        }
      })
  }
}

module.exports = moduleLookup
