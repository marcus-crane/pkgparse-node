const logDescription = (moduleName, description) => {
  if (description === 'No description available.') {
    console.log(`${colour.red}↳  ${moduleName.toLowerCase()} => ${colour.white}${description}`)
  } else {
    console.log(`${colour.green}↳  ${moduleName.toLowerCase()} => ${colour.white}${description}`)
  }
}

const log404 = (moduleName) => {
  console.log(`${colour.red}✘  ${moduleName} ${colour.white}does not exist?!`)
}

const logDependency = (dependency) => {
  if (dependency) {
    console.log(`green:${dependency}`)
  }
}

const colour = {
  red: '\u001b[31m',
  green: '\u001b[32m',
  white: '\u001b[37m'
}

module.exports = {
  colour,
  log404,
  logDescription,
  logDependency
}
