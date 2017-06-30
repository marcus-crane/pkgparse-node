const { deepStrictEqual } = require('assert')
const queryNPMRegistry = require('../lib/net/queryNPMRegistry')

describe('queryNPMRegistry', function () {
  it('should return a valid package from the NPM registry', async function () {
    this.timeout(5000)
    const query = await queryNPMRegistry('mocha')
    deepStrictEqual(query.name, 'mocha')
  })

  it('should return a 404 error code if the package does not exist', async function () {
    this.timeout(5000)
    const query = await queryNPMRegistry('hdriuhg')
    deepStrictEqual(query, 404)
  })
})
