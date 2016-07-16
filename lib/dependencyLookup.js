var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var chalk = require('chalk')

function dependencyLookup(dependencies) {
  for (i in dependencies) {
    request
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
          console.log(chalk.green(moduleData))
        } else {
          console.log(chalk.red("That package doesn't exist"))
        }
      })
  }
}

module.exports = dependencyLookup
