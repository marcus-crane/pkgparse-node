const logDescription = (description) => {
  if (description.includes('has no description')) {
    console.log(`red:${description}`)
  } else if (description) {
    console.log(`green:${description}`)
  }
}

const logDependency = (dependency) => {
  if (dependency) {
    console.log(`green:${dependency}`)
  }
}

module.exports = {
  logDescription,
  logDependency
}
