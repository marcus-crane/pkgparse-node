const { fetchNPMDependencies } = require('./parsePackage')
const { search } = require('../search')
const { log404 } = require('../output')

const parseQuery = async (query) => {
  if (query === 404) {
    log404(moduleName)
  } else {
    const dependencies = fetchNPMDependencies(query)
    for (let dependency of dependencies) {
      try {
        await search(dependency)
      } catch (err) {
        throw err
      }
    }
  }
}

module.exports = parseQuery