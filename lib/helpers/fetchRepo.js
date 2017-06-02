const axios = require('axios')
const { error } = require('./loggers')

const fetchRepo = async (module) => {
  try {
    const repo = await axios.get(`https://registry.npmjs.org/${module}`)
    const repoURL = repo.data.bugs.url

    if (repoURL) {
      return repoURL
    } else {
      error("Hmm, that project doesn't seem to have a Github repo!")
    }
  } catch (e) {
    error("I couldn't check for a repo. Check that you're online?")
  }
}
