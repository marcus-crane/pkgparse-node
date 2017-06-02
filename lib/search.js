const axios = require('axios')
const l = require('./helpers/loggers')

module.exports = search = async (moduleName) => {
    try {
        const res = await axios.get(`https://registry.npmjs.org/${moduleName}`)
        const module = res.data
        if (module.description) {
            l.success(module.name, module.description)
        } else {
            l.error('There is no description for this module')
        }
    } catch (e) {
        l.error("That module may not exist?\nAre you sure that you or NPM aren't offline?")
    }
}