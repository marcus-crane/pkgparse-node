const queryNPMRegistry = require('./net/queryNPMRegistry')
const { fetchDescription } = require('./parsePackage')
const { log404, logDescription } = require('./output')

const search = async (moduleName) => {
  const query = await queryNPMRegistry(moduleName)
  if (query === 404) {
    log404(moduleName)
  } else {
    const description = fetchDescription(query)
    logDescription(description)
  }
}

module.exports = search
