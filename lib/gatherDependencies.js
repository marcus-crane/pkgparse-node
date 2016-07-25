function sortDependencies(parsedPkg) {
  var dependencies = []

  if (parsedPkg.devDependencies !== undefined) {
    for (var i in Object.keys(parsedPkg.devDependencies)) {
      dependencies.push(Object.keys(parsedPkg.devDependencies)[i])
    }
  }

  if (parsedPkg.dependencies !== undefined) {
    for (var i in Object.keys(parsedPkg.dependencies)) {
      dependencies.push(Object.keys(parsedPkg.dependencies)[i])
    }
  }

  if (parsedPkg.devDependencies === undefined && parsedPkg.dependencies === undefined) {
    return console.log("Your package.json doesn't even have any dependencies...")
  }

  return dependencies
}

module.exports = sortDependencies
