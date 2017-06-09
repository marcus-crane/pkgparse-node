const { stdout } = require('test-console')
const { deepStrictEqual } = require('assert')
const { colour, logDescription } = require('../lib/output')

describe('output', function () {
  describe('logDescription', function () {
    it('should output with green text if a description is found', function () {
      const inspect = stdout.inspect()
      const description = 'This package does a bunch of things'
      logDescription('FaKePaCkAgE', description)
      inspect.restore()
      deepStrictEqual(`${colour.green}‣  fakepackage =>${colour.white} ${description}\n`, inspect.output[0])
    })

    it('should output with red text if a description is not found', function () {
      const inspect = stdout.inspect()
      const description = 'No description available.'
      logDescription('FAKEPACKAGE', description)
      inspect.restore()
      deepStrictEqual(`${colour.red}?? fakepackage =>${colour.white} ${description}\n`, inspect.output[0])
    })
  })
})
