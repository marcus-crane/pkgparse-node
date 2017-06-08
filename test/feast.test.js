const { stdout } = require('test-console')
const { deepStrictEqual } = require('assert')
const { colour } = require('../lib/output')
const feast = require('../lib/feast')

describe('feast', function () {
  it('should output the dependencies of a module along with their descriptions', async function () {
    const inspect = stdout.inspect()
    const moduleName = 'uuid'
    await feast(moduleName)
    inspect.restore()
    deepStrictEqual(`${colour.green}↳  mocha => ${colour.white}simple, flexible, fun test framework\n`, inspect.output[0])
  })
})
