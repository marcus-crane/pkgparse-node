const { stdout } = require('test-console')
const { deepStrictEqual } = require('assert')
const { colour, logDescription, log404, logSurprise, logTypes } = require('../lib/output')

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

  describe('log404', function () {
    it('should output with red text when given a module name', function () {
      const inspect = stdout.inspect()
      log404('TwitchForDogs')
      inspect.restore()
      deepStrictEqual(`${colour.red}✘  TwitchForDogs${colour.white} does not exist?!\n`, inspect.output[0])
    })
  })

  describe('logSurprise', function () {
    it('should output with pink text when given certain module names', function () {
      const inspect = stdout.inspect()
      logSurprise('pkgparse')
      inspect.restore()
      deepStrictEqual(`${colour.pink}❤  pkgparse is what you're using right now and I want to say thanks for being a user!\n`, inspect.output[0])
    })
  })

  describe('logTypes', function () {
    it('should output with blue text when given a scoped @types module', function () {
      const inspect = stdout.inspect()
      logTypes('@types/mocha')
      inspect.restore()
      deepStrictEqual(`${colour.blue}✱  mocha${colour.white} is a part of the Typescript bindings family. It lives over at https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mocha\n`, inspect.output[0])
    })
  })
})
