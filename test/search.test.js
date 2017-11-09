const { deepStrictEqual } = require('assert')
const { stdout } = require('test-console')
const { colour } = require('../lib/output')
const search = require('../lib/search')

describe('search', function () {
  it('should output a description when given a valid module', async function () {
    const inspect = stdout.inspect()
    await search('got')
    inspect.restore()
    deepStrictEqual(`${colour.green}‣  got =>${colour.white} Simplified HTTP requests\n`, inspect.output[0])
  })

  it('should output a user friendly error message when given a module with no description', async function () {
    const inspect = stdout.inspect()
    await search('test4')
    inspect.restore()
    deepStrictEqual(`${colour.red}?? test4 =>${colour.white} No description available.\n`, inspect.output[0])
  })

  it('should output a user friendly error message when given an invalid module', async function () {
    const inspect = stdout.inspect()
    await search('uhrsiufe')
    inspect.restore()
    deepStrictEqual(`${colour.red}✘  uhrsiufe${colour.white} does not exist?!\n`, inspect.output[0])
  })

  it('should output an informational message when passed a typescript module', async function () {
    const inspect = stdout.inspect()
    await search('@types/react')
    inspect.restore()
    deepStrictEqual(`${colour.blue}✱  @types/react${colour.white} is a part of the Typescript bindings family. It lives over at https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react\n`, inspect.output[0])
  })

  it('should output a sneaky little easter egg when run on pkgparse itself', async function () {
    const inspect = stdout.inspect()
    await search('pkgparse')
    inspect.restore()
    deepStrictEqual(`${colour.pink}❤  pkgparse is what you're using right now and I want to say thanks for being a user!\n`, inspect.output[0])
  })
})
