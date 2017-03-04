const search = require('./search')
const feast = require('./feast')
const deps = require('./deps')
const open = require('./open')

module.exports = function parseMenu(command, args) {
    switch(command) {
        case('search'):
            search(args.module)
            break
        case('feast'):
            feast(args.path)
            break
        case('deps'):
            deps(args.module)
            break
        case('open'):
            open(args.module, args.app)
            break
        case('github'):
            console.log('Coming soon...')
            break
        default:
            console.error('Oops, that wasn\'t a valid option')
            break
    }
}

