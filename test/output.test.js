const { stdout } = require('test-console')
const assert = require('assert')
const { logDescription } = require('../lib/output')

describe('output', function () {
  describe('logDescription', function () {
    it('should output green text if a description is found', function () {
      const inspect = stdout.inspect()
      const description = 'This package does a bunch of things'
      logDescription(description)
      inspect.restore()
      assert.deepStrictEqual(`green:${description}\n`, inspect.output[0])
    })

    it('should output red text if a description is not found', function () {
      const inspect = stdout.inspect()
      const description = 'Express has no description'
      logDescription(description)
      inspect.restore()
      assert.deepStrictEqual(`red:${description}\n`, inspect.output[0])
    })
  })
})
