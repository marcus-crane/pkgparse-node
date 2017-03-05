const fs = require('fs')
const search = require('./search')
const fetchNPMDeps = require('./helpers/fetchNPMDeps')
const checkDepsExist = require('./helpers/checkDepsExist')
const l = require('./helpers/loggers')

function feast(module) {
    if (module) {
        fetchNPMDeps(module)
        .then((deps) => {
            if (deps) {
                // A silly little easter egg
                if (module === 'pkgparse') {
                    l.error(`${module} is... hey wait, that's me!`)
                } else {
                    l.error(`${module} is made of...`)
                }
                searchArray(deps)
            }
        })
        .catch(() => {
            l.error('That module doesn\'t seem to have any dependencies!')
        })
    } else {
        // let file = fs.readFileSync(process.cwd() + '/package.json', 'utf-8')
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

    function searchArray(deps) {
        for (let i of deps) {
            search(i)
        }
    }
}

module.exports = feast
