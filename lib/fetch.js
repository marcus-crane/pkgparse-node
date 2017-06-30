const { fetchNPMDependencies } = require('./parsePackage')
const { log404 } = require('./output')
const search = require('./search')
const queryNPMRegistry = require('./net/queryNPMRegistry')

const fetch = async (moduleName) => {
  const query = await queryNPMRegistry(moduleName)
  if (query === 404) { log404(moduleName) } else {
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

module.exports = fetch
