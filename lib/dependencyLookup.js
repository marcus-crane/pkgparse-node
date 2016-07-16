var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)
var chalk = require('chalk')
var moduleLookup = require('./moduleLookup')

function dependencyLookup(module) {
  request
    .get('http://registry.npmjs.org/' + module)
    .end(function(err, res) {
      if (res === undefined) {
        console.error(chalk.red("Looks like you're offline"))
      } else {
        res = JSON.parse(res.text)

        if (res.name !== undefined) {
          var dist = res['dist-tags'].latest

          console.log(chalk.green(res.name))

          for (var i = 0; i < res.name.length; i++) {
            process.stdout.write('-')
          }
          console.log('\nDependencies')

          for (i in Object.keys(res.versions[dist].dependencies)) {
            var module = moduleLookup(Object.keys(res.versions[dist].dependencies))
            console.log(chalk.green('↳', Object.keys(res.versions[dist].dependencies)[i]))
          }

          console.log('\nDev Dependencies')
          
          for (i in Object.keys(res.versions[dist].devDependencies)) {
            console.log(chalk.green('↳', Object.keys(res.versions[dist].devDependencies)[i]))
          }

        } else {
          console.log(chalk.red("That package doesn't exist"))
        }
      }
    })
}

module.exports = dependencyLookup
