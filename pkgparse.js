#!/usr/bin/env node

var getDependencies = require('./lib/getDependencies')
var dependencyLookup = require('./lib/dependencyLookup')
var program = require('commander')
var chalk = require('chalk')

program
  .version('0.1.0')
  .description('pkgparse is a tiny program for finding out info about node modules')
  .usage('[flag] <options>')
  .option('-f --file', 'scan package.json in current working directory.')
  .option('-s --search [name]', 'search for a specific module')
  .action(function (flag, name) {
    flagValue = flag
    nameValue = name
  })
  .parse(process.argv)

if (program.file && program.search) {
  console.log(chalk.yellow("Running file and search together does nothing. Nice try though!"))
  process.exit(1)
}

if (program.file) {
  getDependencies(process.cwd() + "/package.json")
}

if (program.file && program.rawArgs[3]) {
  console.log(chalk.yellow("The -f flag doesn't accept arguments (yet)"))
  process.exit(1)
}

if (program.search) {
  dependencyLookup([program.search])
}

if (program.search && program.rawArgs[3] === 'pkgparse') {
  console.log(chalk.cyan("currentuser => The human operating this program. Sneaky enough to know about recursion."))
}

if (program.search && !program.rawArgs[3]) {
  program.help()
}

if (!program.rawArgs[2]) {
  program.help()
}
