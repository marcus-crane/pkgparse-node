const search = require("./search")
const feast = require("./feast")
const open = require("./open")
const { error } = require("./helpers/loggers")

module.exports = parseMenu = function (command, args) {
  switch(command) {
  case("search"):
    search(args.module)
    break
  case("feast"):
    feast(args.module)
    break
  case("open"):
    open(args.module, "npm")
    break
  case("github"):
    open(args.module, "github")
    break
  default:
    error("Oops, that wasn't a valid option")
    break
  }
}