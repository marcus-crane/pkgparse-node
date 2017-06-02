#!/usr/bin/env node
const prog = require('caporal')
const parseMenu = require('./lib/parseMenu')

prog
  .version('2.1.0')

  .command('search', 'Get a brief description of what a module does')
  .argument('<module>', 'Module name to look up')
  .action((args, options) => {
    parseMenu('search', args)
  })

  .command('feast', 'Search applied to an entire package.json or module')
  .option('--module <name>', 'Provide a dependency name to see what it\'s made from')
  .action((args, options) => {
    parseMenu('feast', options)
  })

  .command('open', 'Go straight to the NPM page for a module')
  .argument('<module>', 'The name of the module to navigate to')
  .action((args, options) => {
    parseMenu('open', args)
  })

  .command('gh', 'Go straight to the Github page for a module')
  .argument('<module>', 'The name of the module to visit on Github')
  .action((args, options) => {
    parseMenu('github', args)
  })

prog.parse(process.argv)