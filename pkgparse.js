#!/usr/bin/env node
const prog = require('caporal')
const search = require('./lib/search')
const fetch = require('./lib/fetch')

prog
  .version('3.0.0')

  .command('search', 'Get a brief description of what a module does')
  .argument('<module>', 'Module name to look up')
  .action((args, options) => {
    search(args.module)
  })

  .command('scan', 'Scan the package.json in the current directory')
  .action((args, options) => {
    scan(args.module)
  })

  .command('fetch', 'Fetch the package.json for an NPM module')
  .argument('<module>', 'Module to look up')
  .action((args, options) => {
    fetch(args.module)
  })

prog.parse(process.argv)
