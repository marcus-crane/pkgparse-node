const assert = require('assert')
const { fetchDescription, fetchDependencies } = require('../lib/parsePackage')

describe('parsePackage', function () {
  describe('fetchDescription', function () {
    it('should return a description for a JSON object that contains one', function () {
      let pkg = { name: 'uuid', description: 'Simple, fast generation of RFC4122 UUIDS' }
      let expected = fetchDescription(pkg)
      assert(expected, 'Simple, fast generation of RFC4122 UUIDS')
    })

    it('should return a string with the package name if missing a description', function () {
      let pkg = { name: 'empty' }
      let expected = fetchDescription(pkg)
      assert(expected, 'empty has no dependencies')
    })
  })
})
