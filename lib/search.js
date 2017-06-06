const queryNPMRegistry = require('./net/queryNPMRegistry')
const { fetchDescription } = require('./parsePackage')
const { logDescription } = require('./output')

const search = async (moduleName) => {
  const query = await queryNPMRegistry(moduleName)
  const description = fetchDescription(query)
  logDescription(description)
}

module.exports = search
