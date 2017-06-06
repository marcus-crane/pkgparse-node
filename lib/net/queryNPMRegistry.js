const request = require('./request')

const queryNPMRegistry = async (module) => {
  try {
    return request(`https://registry.npmjs.org/${module}`)
  } catch (e) {
    throw e
  }
}

module.exports = queryNPMRegistry
