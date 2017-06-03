const opn = require('opn')
const fetchRepo = require('./helpers/fetchRepo')
const { error } = require('./helpers/loggers')

module.exports = open = async function (moduleName, site) {
  if (site === "npm") {
    try {
      opn(`https://www.npmjs.com/package/${moduleName}`, { wait: false })
    } catch (e) {
      error("Oops, do you have a default browser? I couldn't seen to navigate you over to NPM!")
    }
  }

  if (site === "github") {
    try {
      const repo = await fetchRepo(moduleName)
      const repoURL = repo.slice(0, -7)
      opn(repoURL, { wait: false })
    } catch (e) {
      error("Oops, do you have a default browser? I couldn't seem to navigate you over to Github!")
    }
  }
}