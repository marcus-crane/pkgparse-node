const opn = require('opn')
const h = require('./helpers')

function open(moduleName, app) {
    opn(`http://npmjs.org/package/${moduleName}`, { wait: false })
    .catch((err) => {
        h.error('Oops, do you have a default browser? I couldn\'t seem to open it.')
    })
}

module.exports = open