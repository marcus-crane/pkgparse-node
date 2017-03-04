const fs = require('fs')
const search = require('./search')
const fetchDepsFromNPM = require('./helpers/fetchDepsFromNPM')
const l = require('./helpers/loggers')

function feast(module) {
    if (module) {
        fetchDepsFromNPM(module)
        .then((deps) => {
            console.log(`${module} is made of...`)
            searchArray(deps)
        })
    } else {
        let package = JSON.parse(fs.readFileSync(process.cwd() + '/package.json', 'utf-8'))
        let deps = [...Object.keys(package.dependencies), ...Object.keys(package.devDependencies)].sort()
        searchArray(deps)
    }

    function searchArray(deps) {
        for (let i of deps) {
            search(i)
        }
    }
}

module.exports = feast