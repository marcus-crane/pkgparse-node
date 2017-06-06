const fetchDescription = (pkg) => {
  if (pkg.description) {
    return pkg.description
  } else {
    return `${pkg.name} has no description`
  }
}

const fetchDependencies = (pkg) => {
  let deps = new Set()

  if (pkg.dependencies) {
    for (let name of Object.keys(pkg.dependencies)) {
      deps.add(name)
    }
  }

  if (pkg.devDependencies) {
    for (let name of Object.keys(pkg.devDependencies)) {
      deps.add(name)
    }
  }

  return [...deps]
}

module.exports = {
  fetchDependencies,
  fetchDescription
}
