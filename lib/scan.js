const fs = require('fs')
const { fetchDependencies } = require('./parse/parsePackage')
const search = require('./search')

const scan = async (currentDirectory) => {
  try {
    const package = JSON.parse(fs.readFileSync(`${currentDirectory}/package.json`, 'utf8'))
    const dependencies = fetchDependencies(package)
    try {
      for (let dependency of dependencies) {
        await search(dependency)
      }
    } catch(err) {
      console.log(`Uh oh, ${err}`)
    }
  } catch(err) {
    console.log("Hmm, it looks like there isn't a package in this directory?")
  }
}

module.exports = scan