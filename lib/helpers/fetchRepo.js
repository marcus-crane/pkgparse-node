const axios = require('axios')
const l = require('./loggers')

function fetchRepo(module) {
    return axios.get(`https://registry.npmjs.org/${module}`)
    .then((res) => {
        let repoURL = res.data.homepage

        if (repoURL) {
            return repoURL
        } else {
            l.error('Hmm, that project doesn\'t seem to have a Github repo!')
        }
    })
    .catch(() => {
        l.error('I couldn\'t check for a repo. Check that you\'re online?')
    })
}

module.exports = fetchRepo
