const { deepStrictEqual } = require('assert')
const { stdout } = require('test-console')
const search = require('../lib/search')

describe('search', function () {
  it('should receive a valid module name and output its description', async function () {
    const inspect = stdout.inspect()
    await search('got')
    inspect.restore()
    deepStrictEqual(`green:Simplified HTTP requests\n`, inspect.output[0])
  })

  it('should receive an invalid module name and output an error', async function () {
    const inspect = stdout.inspect()
    await search('uhrsiufe')
    inspect.restore()
    deepStrictEqual(`red:uhrsiufe does not exist!\n`, inspect.output[0])
  })
})
