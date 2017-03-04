const opn = require('opn')
const l = require('./helpers/loggers')

function open(moduleName, app) {
    opn(`http://npmjs.org/package/${moduleName}`, { wait: false })
    .catch((err) => {
        l.error('Oops, do you have a default browser? I couldn\'t seem to open it.')
    })
}

module.exports = open