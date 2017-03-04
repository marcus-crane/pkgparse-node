const axios = require('axios')
const l = require('./loggers')

function fetchRepo(module) {
    return axios.get(`https://registry.npmjs.org/${module}`)
    .then((res) => {
        return res.data.repository.url
    })
    .catch((err) => {
        l.error('Hmm, I don\'t think that project has a Github repo? Check that you\'re online too')
    })
}

module.exports = fetchRepo
