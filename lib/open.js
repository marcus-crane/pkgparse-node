const opn = require('opn')
const fetchRepo = require('./helpers/fetchRepo')
const l = require('./helpers/loggers')

function open(moduleName, site) {
    if (site === 'npm') {
        opn(`http://npmjs.org/package/${moduleName}`, { wait: false })
        .catch((err) => {
            l.error('Oops, do you have a default browser? I couldn\'t seem to navigate to NPM!')
        })
    }

    if (site === 'github') {
        fetchRepo(moduleName)
        .then((repoURL) => {
            opn(repoURL.slice(4), { wait: false })
            .catch(() => {
                l.error('Oops, do you have a default browser? I couldn\'t seem to navigate to Github!')
            })
        })
    }
}

module.exports = open