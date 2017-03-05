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
            // Slice removes #README from URL
            // repoURL will be undefined too when offline so upon slicing, it (accidentally) triggers the offline error (which we want)
            // rather than the default browser error. Maybe not best practice but It Works™
            opn(repoURL.slice(0, -7), { wait: false })
            .catch(() => {
                l.error('Oops, do you have a default browser? I couldn\'t seem to navigate to Github!')
            })
        })
        .catch((err) => {
            l.error('It seems you might be offline? That or the NPM registry is down?')
        })
    }
}

module.exports = open