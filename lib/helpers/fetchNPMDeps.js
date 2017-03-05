const axios = require('axios')
const l = require('./loggers')
const checkDepsExist = require('./checkDepsExist')

function fetchDepsFromNPM(module) {
    return axios.get(`https://registry.npmjs.org/${module}`)
    .then((res) => {
        let latest = res.data['dist-tags'].latest
        let latestVersion = res.data.versions[latest]
        
        let deps = checkDepsExist(latestVersion)

        if (deps.size) {
            return deps
        } else {
            l.error('That module seems to have no dependencies!')
        }
    })
    .catch(() => {
        l.error('Hmm, are you sure that you\'re online right now?')
    })
}

module.exports = fetchDepsFromNPM
