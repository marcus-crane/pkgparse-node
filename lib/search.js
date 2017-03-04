const axios = require('axios')
const h = require('./helpers')

module.exports = function search(moduleName) {
    return axios.get(`https://registry.npmjs.org/${moduleName}`)
    .then((res) => {
        if (res.data.description) {
            h.success(res.data.description)
        } else {
            h.error('There is no description for this module')
        }
    })
    .catch((err) => {
        h.error('Something went wrong. That module may not exist.\nAre you sure that you or NPM aren\'t offline')
    })
}