#!/usr/bin/env node
const prog = require('caporal')
const search = require('./lib/search')

prog
  .version('3.0.0')

  .command('search', 'Get a brief description of what a module does')
  .argument('<module>', 'Module name to look up')
  .action((args, options) => {
    search(args.module)
  })

prog.parse(process.argv)
