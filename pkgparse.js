#!/usr/bin/env node

var getDependencies = require('./lib/getDependencies')
var dependencyLookup = require('./lib/dependencyLookup')
var program = require('commander')
var chalk = require('chalk')

program
  .version('0.1.0')
  .description('pkgparse is a tiny program for finding out info about node modules')
  .usage('[flag] <options>')
  .option('-f --file [path]', 'scan package.json in current directory or in a specified location.')
  .option('-s --search [name]', 'search for a specific module')
  .parse(process.argv)

if (program.file && program.search) {
  console.log(chalk.yellow("Running file and search together does nothing. Nice try though!"))
  process.exit(1)
}

if (program.file && !program.rawArgs[3]) {
  getDependencies(process.cwd() + "/package.json")
}

if (program.file && program.rawArgs[3]) {
  if (program.rawArgs[3].charAt(0) == '~') {
    var dirpath = program.rawArgs[3].slice(1)
    getDependencies(process.env.HOME + dirpath)
  } else {
    getDependencies(program.rawArgs[3])
  }
}

if (program.search) {
  dependencyLookup([program.search])
}

if (program.search && program.rawArgs[3] === 'pkgparse') {
  console.log(chalk.yellow("currentuser => The human operating this program. Sneaky enough to know about recursion."))
}

if (program.search && !program.rawArgs[3]) {
  program.help()
}

if (!program.rawArgs[2]) {
  program.help()
}
