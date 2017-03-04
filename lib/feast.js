const fs = require('fs')
const search = require('./search')

function feast(fileLocation) {
    let package = JSON.parse(fs.readFileSync(fileLocation || process.cwd() + '/package.json', 'utf-8'))
    let deps = [...Object.keys(package.dependencies), ...Object.keys(package.devDependencies)].sort()
    return deps
}

module.exports = feast