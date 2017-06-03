const axios = require('axios')
const { error } = require('./loggers')
const checkDepsExist = require('./checkDepsExist')

module.exports = async function fetchNPMDeps (moduleName) {
  try {
    const module = await axios.get(`https://registry.npmjs.org/${moduleName}`)
    const latest = module.data['dist-tags'].latest
    const latestVersion = module.data.versions[latest]
    const deps = checkDepsExist(latestVersion)

    if (deps.size) { return deps } else { error('That module seems to have no dependencies!') }
  } catch (e) {
    console.log(e)
    error("Hmm, are you sure that you're online right now?")
  }
}
