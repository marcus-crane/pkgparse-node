#!/usr/bin/env node

var getDependencies = require('./lib/getDependencies')
var moduleLookup = require('./lib/moduleLookup')
var dependencyLookup = require('./lib/dependencyLookup')
var visitNPM = require('./lib/visitNPM')
var examples = require('./lib/examples')
var program = require('commander')
var chalk = require('chalk')

program
  .version('0.2.0')
  .description('pkgparse is a tiny program for finding out info about node modules')
  .usage('[flag] <options>')
  .option('-f --file [path]', 'scan package.json in the current directory or in a specified location\n')
  .option('-s --search [name]', 'search for a specific module')
  .option('-d --dependencies [name]', 'check the dependencies of a module')
  .option('-o --open [name] [browser]', 'visit npm page of specified module with program/browser\n')
  .option('-e --examples', 'still stuck? check out my handy list of examples')
  .parse(process.argv)

if (program.examples) {
  examples()
}

  // User invokes a flag and successfully passes in parameters

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
  moduleLookup([program.search])
}

if (program.search && program.rawArgs[3] === 'pkgparse') {
  console.log(chalk.yellow("currentuser => The human operating this program. Sneaky enough to know about recursion."))
}

if (program.dependencies && program.rawArgs[3]) {
  dependencyLookup([program.dependencies])
}

if (program.open && program.rawArgs[3]) {
  visitNPM([program.open], program.rawArgs[4])
  process.exit(1)
}

// User invokes a flag without any parameters

if (program.search && !program.rawArgs[3]) {
  program.help()
}

if (program.dependencies && !program.rawArgs[3]) {
  program.help()
}

if (program.open && !program.rawArgs[3]) {
  program.help()
}

if (!program.rawArgs[2]) {
  program.help()
}
