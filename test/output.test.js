const { stdout } = require('test-console')
const { deepStrictEqual } = require('assert')
const { logDescription, logDependency } = require('../lib/output')

describe('output', function () {
  describe('logDescription', function () {
    it('should output green text if a description is found', function () {
      const inspect = stdout.inspect()
      const description = 'This package does a bunch of things'
      logDescription(description)
      inspect.restore()
      deepStrictEqual(`green:${description}\n`, inspect.output[0])
    })

    it('should output red text if a description is not found', function () {
      const inspect = stdout.inspect()
      const description = 'Express has no description'
      logDescription(description)
      inspect.restore()
      deepStrictEqual(`red:${description}\n`, inspect.output[0])
    })

    it('should output nothing if given an empty string', function () {
      const inspect = stdout.inspect()
      const description = ''
      logDescription(description)
      inspect.restore()
      deepStrictEqual([], inspect.output)
    })
  })

  describe('logDependency', function () {
    it('should output green text for a valid dependency', function () {
      const inspect = stdout.inspect()
      const dependency = 'Mocha'
      logDependency(dependency)
      inspect.restore()
      deepStrictEqual(`green:${dependency}\n`, inspect.output[0])
    })

    it('should output nothing if given an empty string', function () {
      const inspect = stdout.inspect()
      const dependency = ''
      logDependency(dependency)
      inspect.restore()
      deepStrictEqual([], inspect.output)
    })
  })
})
