const axios = require('axios')
const { success, error } = require('./helpers/loggers')

module.exports = search = async function (moduleName) {
  try {
    const res = await axios.get(`https://registry.npmjs.org/${moduleName}`)
    const module = res.data
    if (module.description) {
      success(module.name, module.description)
    } else {
      error('There is no description for this module')
    }
  } catch (e) {
    error("That module may not exist?\nAre you sure that you or NPM aren't offline?")
  }
}