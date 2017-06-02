const axios = require('axios')
const { error } = require('./loggers')
const checkDepsExist = require('./checkDepsExist')

module.exports = fetchDepsFromNPM = async (moduleName) => {
  try {
    const module = axios.get(`https://registry.npmjs.org/${moduleName}`)
    const latest = module.data["dist-tags"].latest
    const latestVersion = module.data.versions[latest]
    const deps = checkDepsExist(latestVersion)

    if (deps.size) { return deps } else { error("That module seems to have no dependencies!") }
  } catch (e) {
    error("Hmm, are you sure that you're online right now?")
  }
}