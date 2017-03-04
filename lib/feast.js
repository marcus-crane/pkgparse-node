const fs = require('fs')
const search = require('./search')
const fetchNPMDeps = require('./helpers/fetchNPMDeps')
const l = require('./helpers/loggers')

function feast(module) {
    if (module) {
        fetchNPMDeps(module)
        .then((deps) => {
            if (deps) {
                if (module === 'pkgparse') {
                    l.error(`${module} is... hey wait, that's me!`)
                } else {
                    l.error(`${module} is made of...`)
                }
                searchArray(deps)
            }
        })
        .catch((error) => {
            l.error('That module doesn\'t seem to have any dependencies!')
        })
    } else {
        let package = JSON.parse(fs.readFileSync(process.cwd() + '/package.json', 'utf-8'))
        let deps = new Set()

        if (package.dependencies) {
            for (let i of Object.keys(package.dependencies)) {
                deps.add(i)
            }
        }
        
        if (package.devDependencies) {
            for (let i of Object.keys(package.devDependencies)) {
                deps.add(i)
            }
        }

        if (!package.dependencies && !package.devDependencies) {
            l.error('There are no dependencies at all in this package.json')
        }
    
        searchArray(deps)
    }

    function searchArray(deps) {
        for (let i of deps) {
            search(i)
        }
    }
}

module.exports = feast