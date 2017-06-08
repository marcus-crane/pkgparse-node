#!/usr/bin/env node
const prog = require('caporal')
const search = require('./lib/search')
const feast = require('./lib/feast')

prog
  .version('3.0.0')

  .command('search', 'Get a brief description of what a module does')
  .argument('<module>', 'Module name to look up')
  .action((args, options) => {
    search(args.module)
  })

  .command('feast', 'Fetch the contents of a module on NPM')
  .argument('<module>', 'Module to look up')
  .action((args, options) => {
    feast(args.module)
  })

prog.parse(process.argv)
