const assert = require('assert')
const queryNPMRegistry = require('../lib/net/queryNPMRegistry')

describe('queryNPMRegistry', function () {
  it('should return a valid object', async function () {
    this.timeout(5000)
    const query = await queryNPMRegistry('mocha')
    assert.equal(query.name, 'mocha')
  })

  it('should return 404 if the package does not exist', async function () {
    this.timeout(5000)
    const query = await queryNPMRegistry('hdriuhg')
    assert.equal(query, 404)
  })
})
