const { deepStrictEqual } = require('assert')
const { stdout } = require('test-console')
const { colour } = require('../lib/output')
const search = require('../lib/search')

describe('search', function () {
  it('should output a description when given a valid module', async function () {
    const inspect = stdout.inspect()
    await search('got')
    inspect.restore()
    deepStrictEqual(`${colour.green}↳  got =>${colour.white} Simplified HTTP requests\n`, inspect.output[0])
  })

  it('should output an error message when given an invalid module', async function () {
    const inspect = stdout.inspect()
    await search('uhrsiufe')
    inspect.restore()
    deepStrictEqual(`${colour.red}✘  uhrsiufe${colour.white} does not exist?!\n`, inspect.output[0])
  })

  it('should output an informational message when passed a typescript module', async function () {
    const inspect = stdout.inspect()
    await search('@types/react')
    inspect.restore()
    deepStrictEqual(`${colour.blue}⁈  @types/react${colour.white} is a part of the Typescript bindings family. It lives over at https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react\n`, inspect.output[0])
  })
})
