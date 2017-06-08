const { fetchNPMDependencies } = require('./parsePackage')
const search = require('./search')
const queryNPMRegistry = require('./net/queryNPMRegistry')

const feast = async (moduleName) => {
  const pkg = await queryNPMRegistry(moduleName)
  const dependencies = fetchNPMDependencies(pkg)
  for (let dependency of dependencies) {
    try {
      await search(dependency)
    } catch (e) {
      throw e
    }
  }
}

module.exports = feast
