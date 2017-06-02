const fs = require('fs')
const search = require('./search')
const fetchNPMDeps = require('./helpers/fetchNPMDeps')
const checkDepsExist = require('./helpers/checkDepsExist')
const l = require('./helpers/loggers')

module.exports = feast = async (module) => {
    if (module) {
        const deps = await fetchNPMDeps(module)

        if (deps) {
            // A silly easter egg
            if (module === 'pkgparse') {
                l.error(`${module} is... hey wait, that's me!`)
            } else {
                l.error(`${module} is made of...`)
            }
            searchArray(deps)
        }
    } else {
        readPackage()
    }
}

const readPackage = () => {
    fs.readFile(process.cwd() + '/package.json', 'utf-8', (err, file) => {
        if (!err) {
            let package = JSON.parse(file)
            let deps = checkDepsExist(package)

            if (deps.size) {
                searchArray(deps)
            } else {
                l.error('That package seems to have no dependencies!')
            }
        } else {
            l.error('There is no package.json in this directory!')
        }
    })
}

const searchArray = (deps) => {
    for (let dep of deps) {
        search(dep)
    }
}

module.exports = feast
