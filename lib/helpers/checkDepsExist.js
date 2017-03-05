function checkDepsExist(package) {
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

    return deps
}

module.exports = checkDepsExist