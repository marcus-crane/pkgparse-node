const chalk = require('chalk')

const success = (name, string) => {
  console.log(chalk.green(`↳  ${chalk.white(name)} => ${string}`))
}

const error = (string) => {
  console.log(chalk.red(string))
}

module.exports = { success, error }