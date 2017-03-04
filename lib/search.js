const axios = require('axios')
const l = require('./helpers/loggers')

module.exports = function search(moduleName) {
    return axios.get(`https://registry.npmjs.org/${moduleName}`)
    .then((res) => {
        if (res.data.description) {
            l.success(res.data.name, res.data.description)
        } else {
            l.error('There is no description for this module')
        }
    })
    .catch((err) => {
        l.error('That module may not exist?\nAre you sure that you or NPM aren\'t offline!', err)
    })
}