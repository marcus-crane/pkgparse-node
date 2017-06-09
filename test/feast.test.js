const { stdout } = require('test-console')
const { deepStrictEqual } = require('assert')
const { colour } = require('../lib/output')
const feast = require('../lib/feast')

describe('feast', function () {
  it('should output the dependencies of a module along with their descriptions', async function () {
    const inspect = stdout.inspect()
    await feast('uuid')
    inspect.restore()
    deepStrictEqual(`${colour.green}‣  mocha =>${colour.white} simple, flexible, fun test framework\n`, inspect.output[0])
  })

  it('should output an error message if the module does not exist', async function () {
    const inspect = stdout.inspect()
    await feast('frumpywatermelon')
    inspect.restore()
    deepStrictEqual(`${colour.red}✘  frumpywatermelon${colour.white} does not exist?!\n`, inspect.output[0])
  })
})
