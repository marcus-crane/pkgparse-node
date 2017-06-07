const { deepStrictEqual } = require('assert')
const { stdout } = require('test-console')
const { colour } = require('../lib/output')
const search = require('../lib/search')

describe('search', function () {
  it('should output a description when given a valid module', async function () {
    const inspect = stdout.inspect()
    const moduleName = 'got'
    await search(moduleName)
    inspect.restore()
    deepStrictEqual(`${colour.green}↳  ${moduleName} => ${colour.white}Simplified HTTP requests\n`, inspect.output[0])
  })

  it('should output an error message when given an invalid module', async function () {
    const inspect = stdout.inspect()
    const moduleName = 'uhrsiufe'
    await search(moduleName)
    inspect.restore()
    deepStrictEqual(`${colour.red}✘  ${moduleName} ${colour.white}does not exist?!\n`, inspect.output[0])
  })
})
