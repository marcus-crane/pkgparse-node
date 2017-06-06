const assert = require('assert')
const { stdout } = require('test-console')
const search = require('../lib/search')

describe('search', function () {
  it('should receive a module name and output its description', async function () {
    const inspect = stdout.inspect()
    await search('got')
    inspect.restore()
    assert.deepStrictEqual(`green:Simplified HTTP requests\n`, inspect.output[0])
  })
})
