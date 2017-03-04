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
    //.option('<path>', 'Location of a package.json file to parse')
    .action((args, options, logger) => {
        parseMenu('feast', args)
    })

    .command('deps', 'Fetch the dependencies that make up a module')
    .argument('<module>', 'pkgparse will check what dependencies make up this module')
    .action((args, options, logger) => {
        parseMenu('deps', args)
    })

    .command('open', 'Go straight to the NPM page for a module')
    .argument('<module>', 'The name of the module to navigate to')
    .action((args, options, logger) => {
        parseMenu('open', args)
    })

    .command('gh', 'Go straight to the Github page for a module if it exists')
    .argument('<module>', 'The name of the module to visit on Github')
    .action((args, options, logger) => {
        parseMenu('github', args)
    })

prog.parse(process.argv)