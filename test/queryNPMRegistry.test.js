const { deepStrictEqual } = require('assert')
const queryNPMRegistry = require('../lib/net/queryNPMRegistry')

describe('queryNPMRegistry', function () {
  it('should return a valid object', async function () {
    this.timeout(5000)
    const query = await queryNPMRegistry('mocha')
    deepStrictEqual(query.name, 'mocha')
  })

  it('should return 404 if the package does not exist', async function () {
    this.timeout(5000)
    const query = await queryNPMRegistry('hdriuhg')
    deepStrictEqual(query, 404)
  })
})
