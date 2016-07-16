#!/usr/bin/env node
// The above line is what makes it executable

var getDependencies = require('./lib/getDependencies')
var dependencyLookup = require('./lib/dependencyLookup')
var program = require('commander')
var chalk = require('chalk')

program
  .version('0.1.0')
  .usage('[flag] <module name>')
  .option('-f --file', 'scan package.json in current working directory.')
  .option('-s --search [name]', 'search for a specific module')
  .parse(process.argv)

if (program.file) {
  getDependencies(process.cwd() + "/package.json")
}

if (program.search) {
  dependencyLookup([program.search])
}
