const axios = require('axios')
const l = require('./loggers')

function fetchDepsFromNPM(module) {
    return axios.get(`https://registry.npmjs.org/${module}`)
    .then((res) => {
        let latest = res.data['dist-tags'].latest
        let deps = [...Object.keys(res.data.versions[latest].dependencies), ...Object.keys(res.data.versions[latest].devDependencies)]
        return deps
    })
    .catch((err) => {
        l.error('If you\'re online then it seems that module has no dependencies!')
    })
}

module.exports = fetchDepsFromNPM
