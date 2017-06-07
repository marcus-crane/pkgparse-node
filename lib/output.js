const logDescription = (description) => {
  if (description.includes('has no description')) {
    console.log(`red:${description}`)
  } else if (description) {
    console.log(`green:${description}`)
  }
}

const log404 = (moduleName) => {
  console.log(`red:${moduleName} does not exist!`)
}

const logDependency = (dependency) => {
  if (dependency) {
    console.log(`green:${dependency}`)
  }
}

module.exports = {
  log404,
  logDescription,
  logDependency
}
