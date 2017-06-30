const queryNPMRegistry = require('./net/queryNPMRegistry')
const { fetchDescription } = require('./parsePackage')
const { log404, logDescription, logSurprise, logTypes } = require('./output')

const search = async (moduleName) => {
  if (moduleName.includes('@types')) {
    return logTypes(moduleName)
  }

  if (moduleName === 'pkgparse') {
    return logSurprise(moduleName)
  }

  const query = await queryNPMRegistry(moduleName)

  if (query === 404) {
    log404(moduleName)
  } else {
    const description = fetchDescription(query)
    logDescription(moduleName, description)
  }
}

module.exports = search
