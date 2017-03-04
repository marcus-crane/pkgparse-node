const prog = require('caporal')
const parseMenu = require('./lib/parseMenu')

prog
    .version('2.0.0')

    .command('search', 'Get a brief description of what a module does')
    .argument('<module>', 'Module name to look up')
    .action((args, options, logger) => {
        parseMenu('search', args)
    })

    .command('feast', 'Search run against an entire package.json')
    .action((args, options, logger) => {
        parseMenu('feast')
    })

    .command('deps', 'Fetch the dependencies that make up a module')
    .argument('<module>', 'pkgparse will check what dependencies make up this module')
    .action((args, options, logger) => {
        parseMenu('deps', args)
    })

    .command('open', 'Go straight to the NPM page for a module')
    .argument('<module>', 'The name of the module to navigate to')
    .argument('<app>', 'Name of a browser to view the NPM page in')
    .action((args, options, logger) => {
        parseMenu('open', args)
    })

prog.parse(process.argv)