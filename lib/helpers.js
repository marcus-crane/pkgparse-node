const chalk = require('chalk')

function success(string) {
    console.log(chalk.green(`↳ ${string}`))
}

function error(string) {
    console.log(chalk.red(string))
}

module.exports = {
    success,
    error
}