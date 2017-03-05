const axios = require('axios')
const l = require('./loggers')

function fetchDepsFromNPM(module) {
    return axios.get(`https://registry.npmjs.org/${module}`)
    .then((res) => {
        let latest = res.data['dist-tags'].latest
        let latestVersion = res.data.versions[latest]
        let deps = new Set()

        if (latestVersion.dependencies) {
            for (let i of Object.keys(latestVersion.dependencies)) {
                deps.add(i)
            }
        }
        
        if (latestVersion.devDependencies) {
            for (let i of Object.keys(latestVersion.devDependencies)) {
                deps.add(i)
            }
        }

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
