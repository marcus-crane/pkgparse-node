const logDescription = (moduleName, description) => {
  if (description === 'No description available.') {
    console.log(`${colour.red}?? ${moduleName.toLowerCase()} =>${colour.white} ${description}`)
  } else {
    console.log(`${colour.green}‣  ${moduleName.toLowerCase()} =>${colour.white} ${description}`)
  }
}

const log404 = (moduleName) => {
  console.log(`${colour.red}✘  ${moduleName}${colour.white} does not exist?!`)
}

const logThanks = (moduleName) => {
  console.log(`${colour.pink}❤  ${moduleName.toLowerCase()} is what you're using right now and I want to say thanks for being a user!`)
}

const logTypes = (moduleName) => {
  const submodule = moduleName.split('/')[1]
  console.log(`${colour.blue}✱  ${moduleName.toLowerCase()}${colour.white} is a part of the Typescript bindings family. It lives over at https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/${submodule}`)
}

const colour = {
  red: '\u001b[31m',
  green: '\u001b[32m',
  blue: '\u001b[34m',
  pink: '\u001b[35m',
  white: '\u001b[37m'
}

module.exports = {
  colour,
  log404,
  logDescription,
  logThanks,
  logTypes
}
