const chalk = require('chalk')

function success(name, string) {
    console.log(chalk.green(`↳  ${chalk.white(name)} => ${string}`))
}

function error(string) {
    console.log(chalk.red(string))
}

module.exports = {
    success,
    error
}