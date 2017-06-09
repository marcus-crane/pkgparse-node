const request = require('./request')

const queryNPMRegistry = async (module) => {
  try {
    return request(`https://registry.npmjs.org/${module}`)
  } catch (err) {
    throw err
  }
}

module.exports = queryNPMRegistry
