var chalk = require('chalk')
var open = require('opn')

function visitNPM(module, browser) {
  if (!browser) {
    open('http://npmjs.org/package/' + module)
  } else {
    open('http://npmjs.org/package/'+ module, { app: browser })
  }
}

module.exports = visitNPM
